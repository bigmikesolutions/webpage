import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pl from './locales/pl.json'

const messages = {
  en,
  pl
}

export const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'pl',
  fallbackLocale: 'en',
  messages,
  legacy: false,
  globalInjection: true
})

export default i18n
