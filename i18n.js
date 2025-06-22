import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      // Usaremos carga estática desde `public/`
    },

    // Ruta a traducciones en public/locales/{lng}/translation.json
    resources: {},
    lng: 'es', // Idioma inicial (puedes cambiar a 'es' si lo prefieres)
  });

// Carga manual de recursos locales
import en from './public/locales/en/translation.json';
import es from './public/locales/es/translation.json';

i18n.addResourceBundle('en', 'translation', en);
i18n.addResourceBundle('es', 'translation', es);

export default i18n;
