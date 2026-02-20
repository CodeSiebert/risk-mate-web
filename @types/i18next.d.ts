import 'i18next';

import commonNS from '../public/locales/de-DE/common.json';
import welcomeNS from '../public/locales/de-DE/welcome.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    enableSelector: true;
    defaultNS: 'common';
    resources: {
      common: typeof commonNS;
      welcome: typeof welcomeNS;
    };
  }
}
