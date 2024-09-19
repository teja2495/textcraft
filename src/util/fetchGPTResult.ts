import OpenAI from 'openai';
import {fetchPrompt, InputActionType} from '../common/constants';
import {getOpenAIApiKey} from './handleApiKey';
import {logError} from './helpers';

interface Props {
  input: string;
  actionType: InputActionType;
  key?: string;
}

export const fetchGPTResult = async ({input, actionType, key}: Props) => {
  const apiKey = key ?? (await getOpenAIApiKey());

  const client = new OpenAI({
    apiKey: apiKey ?? '',
  });
  const promptPrefix = fetchPrompt[actionType];
  const inputWithPrompt = `${promptPrefix}${input}`;
  console.log('API Input: ', inputWithPrompt);

  try {
    const response = await client.chat.completions.create({
      messages: [{role: 'user', content: inputWithPrompt}],
      model: 'gpt-4o-mini',
    });

    console.log('API Response: ', JSON.stringify(response));
    return String(response.choices[0].message.content).trim();
  } catch (error) {
    logError(error);
    if (String(error).includes('401')) {
      return 'ERR401';
    } else if (String(error).includes('429')) {
      return 'ERR429';
    } else {
      return '';
    }
  }
};

export const isKeyWorking = async (key: string) => {
  const result = await fetchGPTResult({
    input: 'Test',
    actionType: InputActionType.Rewrite,
    key,
  });
  return result === '' || result === 'ERR401' || result === 'ERR429'
    ? false
    : true;
};
