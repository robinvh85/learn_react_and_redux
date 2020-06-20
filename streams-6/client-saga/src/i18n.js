import i18next from 'i18next'
import lang from "./locales/lang"
// import cookies from 'react-cookies'

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: lang
})
export default i18next
