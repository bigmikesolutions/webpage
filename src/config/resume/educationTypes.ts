/** YYYY or YYYY-MM */
export type ResumeDate = `${number}` | `${number}-${number}`

export interface ResumeEducation {
  id: string
  /** i18n key under `resume.educationItems.*` */
  i18nKey: string
  /** School / university display name (language-independent fallback) */
  school: string
  url?: string
  start: ResumeDate
  end?: ResumeDate
}
