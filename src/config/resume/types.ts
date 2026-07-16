/** YYYY-MM */
export type YearMonth = `${number}-${number}`

export interface ResumeCompany {
  id: string
  /** i18n key under `resume.companies.*` */
  i18nKey: string
  /** Display name (brand) — usually language-independent */
  name: string
  url?: string
  /** Inclusive start month */
  start: YearMonth
  /** Inclusive end month; omit for current role */
  end?: YearMonth
  /** Canonical tech names used for the tech summary */
  tech: string[]
  /**
   * When false, company stack is shown on the CV but excluded from tech duration summary
   * (e.g. overlapping freelance umbrella that would inflate years).
   * @default true
   */
  countInTechSummary?: boolean
}
