import { default as i18n } from 'i18next';
import { default as LanguageDetector } from 'i18next-browser-languagedetector';
import { default as HttpBackend } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'de-DE',
    fallbackLng: 'de-DE',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
