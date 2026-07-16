import { computed } from 'vue'

/** Year studies were completed — career start */
const GRADUATION_YEAR = 2008

export function useYearsOfExperience() {
  return computed(() => {
    const years = new Date().getFullYear() - GRADUATION_YEAR
    return `${years}+`
  })
}
