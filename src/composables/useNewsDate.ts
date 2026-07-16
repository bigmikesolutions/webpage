import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useNewsDate(isoDate: string) {
  const { locale } = useI18n()

  return computed(() => {
    const [year, month, day] = isoDate.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  })
}
