export enum InputActionType {
  Expand = 'EXPAND',
  Explain = 'EXPLAIN',
  Email = 'EMAIL',
  ExplainLikeTen = 'EXPLAIN_LIKE_TEN',
  FixGrammar = 'FIX_GRAMMAR',
  Rewrite = 'REWRITE',
  RewriteProfessional = 'REWRITE_PROFESSIONAL',
  Shorten = 'SHORTEN',
  Summarize = 'SUMMARIZE',
  SummarizeInPoints = 'SUMMARIZE_IN_POINTS',
}

export const appVersion = require('../../package.json').version;

export enum MoreOptionsType {
  Read = 'READ',
  Write = 'WRITE',
}

export enum ResultErrorType {
  Generic = 'GENERIC',
  InvalidKey = 'INVALID_KEY',
  KeyNotActivated = 'PAYMENT_DETAILS_UNAVAILABLE',
}

export enum ExplainerScreenType {
  About = 'ABOUT',
  AddPayment = 'ADD_PAYMENT',
  KeyInstructions = 'KEY_INSTRUCTIONS',
}

export const fetchPrompt: Record<InputActionType, string> = {
  EXPAND: 'Expand this text into one paragraph - ',
  EXPLAIN_LIKE_TEN: "Explain Like I'm 10 - ",
  EMAIL: 'Write an email for these requirements: ',
  EXPLAIN:
    'Please provide a detailed explanation of the text provided, including any relevant background information or context that may help clarify the meaning. Also ensure your response is specific, concise, and avoids the use of any complex terminology or jargon. - ',
  FIX_GRAMMAR: 'Fix Grammar - ',
  REWRITE_PROFESSIONAL: 'Rewrite in professional tone - ',
  REWRITE: 'Rewrite in common language: ',
  SHORTEN:
    'Make this text shorter but it should preserve all the meaning and tone - ',
  SUMMARIZE_IN_POINTS:
    'Summarize the text in points concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
  SUMMARIZE:
    'Summarize the text concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
};

export enum AppSetting {
  // Toggle Settings
  QuickRewrite = 'QUICK_REWRITE',
  QuickSummarize = 'QUICK_SUMMARIZE',
  ShowTweetEmail = 'SHOW_TWITTER_MAIL',
  IsDarkMode = 'IS_DARK_MODE',
  // Non-Toggle Settings
  ResetKey = 'RESET_API_KEY',
  KeyInstructions = 'KEY_INSTRUCTIONS',
  Feedback = 'FEEDBACK',
  About = 'ABOUT',
  // Non-Visible Settings
  IsFirstTime = 'IS_FIRST_TIME',
}
