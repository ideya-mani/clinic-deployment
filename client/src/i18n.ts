import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import ta from './locales/ta.json';
import hi from './locales/hi.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ta: { translation: ta },
    hi: { translation: hi }
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if translation is missing
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
