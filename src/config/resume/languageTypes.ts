/** CEFR levels used for language proficiency meter (A1–B2 scale; B2+ = full). */
export type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export type LanguageFlag = 'pl' | 'en' | 'de'

export interface ResumeLanguage {
  id: string
  /** i18n key under `resume.languages.*` */
  i18nKey: string
  flag: LanguageFlag
  level: LanguageLevel
}

/** Ordered CEFR steps shown as dots (C1+ = full; B2 = one below full). */
export const languageLevelSteps: LanguageLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1']

export function languageLevelFilled(level: LanguageLevel): number {
  if (level === 'C2') return languageLevelSteps.length
  const index = languageLevelSteps.indexOf(level)
  if (index >= 0) return index + 1
  return 0
}

export function languageLevelTotal(): number {
  return languageLevelSteps.length
}
