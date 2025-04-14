import {createContext} from 'react';

export interface SettingsContextType {
  quickSummarize: boolean;
  quickRewrite: boolean;
  showTweetEmail: boolean;
  isDarkMode: boolean;
}

export const defaultSettings = {
  quickSummarize: false,
  quickRewrite: false,
  showTweetEmail: true,
  isDarkMode: false,
};

export const SettingsContext = createContext({
  appSettings: defaultSettings,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAppSettings: (appSettings: SettingsContextType) => {},
});
