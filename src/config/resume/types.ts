/** YYYY-MM */
export type YearMonth = `${number}-${number}`

export type TechGroup = 'frontend' | 'backend' | 'devops' | 'mobile'

export const techGroupOrder: TechGroup[] = ['frontend', 'backend', 'devops', 'mobile']

export type TechStack = Partial<Record<TechGroup, string[]>>

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
  /** Stack grouped by area */
  stack: TechStack
  /**
   * When false, company stack is shown on the CV but excluded from tech duration summary
   * (e.g. overlapping freelance umbrella that would inflate years).
   * @default true
   */
  countInTechSummary?: boolean
}

export function stackEntries(stack: TechStack): { group: TechGroup; items: string[] }[] {
  return techGroupOrder
    .map((group) => ({ group, items: stack[group] ?? [] }))
    .filter((entry) => entry.items.length > 0)
}
