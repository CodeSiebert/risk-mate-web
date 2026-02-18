import 'i18next';

import commonNS from '../src/assets/locales/de-DE/common.json';
import welcomeNS from '../src/assets/locales/de-DE/welcome.json';

// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module i18next {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof commonNS;
      welcome: typeof welcomeNS;
    };
  }
}
