import { resumeCompanies } from '@/config/resume/companies'
import { resumeEducation } from '@/config/resume/education'
import { resumeInternships } from '@/config/resume/internships'
import { resumeLanguages } from '@/config/resume/languages'
import type { ResumeEducation } from '@/config/resume/educationTypes'
import type { ResumeLanguage } from '@/config/resume/languageTypes'
import {
  stackEntries,
  techGroupOrder,
  type ResumeCompany,
  type TechGroup,
  type TechStack,
  type YearMonth,
} from '@/config/resume/types'

export type { ResumeCompany, ResumeEducation, ResumeLanguage, TechGroup, TechStack, YearMonth }
export {
  resumeCompanies,
  resumeEducation,
  resumeInternships,
  resumeLanguages,
  stackEntries,
  techGroupOrder,
}

export interface TechSummaryItem {
  name: string
  group: TechGroup
  /** Merged exclusive months of use across companies */
  months: number
  /** Floored years for display (min 1 if months > 0) */
  years: number
}

function parseYearMonth(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

/** Exclusive end as months since epoch (year*12 + month), for half-open [start, end). */
function toMonthIndex(value: YearMonth, exclusiveEnd = false): number {
  const { year, month } = parseYearMonth(value)
  return year * 12 + (month - 1) + (exclusiveEnd ? 1 : 0)
}

function currentYearMonth(): YearMonth {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  return `${now.getFullYear()}-${month}` as YearMonth
}

function companyInterval(company: ResumeCompany): [number, number] {
  const start = toMonthIndex(company.start)
  const endYm = company.end ?? currentYearMonth()
  const end = toMonthIndex(endYm, true)
  return [start, Math.max(start, end)]
}

/** Merge overlapping [start, end) month intervals and return total months. */
function mergedMonths(intervals: [number, number][]): number {
  if (intervals.length === 0) return 0
  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let total = 0
  let [curStart, curEnd] = sorted[0]

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i]
    if (start <= curEnd) {
      curEnd = Math.max(curEnd, end)
    } else {
      total += curEnd - curStart
      curStart = start
      curEnd = end
    }
  }
  total += curEnd - curStart
  return total
}

/**
 * Builds a tech summary from company stacks.
 * Overlapping employment periods for the same tech are merged (no double-counting).
 * Group is chosen by the group with the most months for that tech.
 */
export function getTechSummary(companies?: ResumeCompany[]): TechSummaryItem[] {
  const source = companies ?? [...resumeCompanies, ...resumeInternships]
  const byTech = new Map<string, [number, number][]>()
  const groupMonths = new Map<string, Partial<Record<TechGroup, number>>>()

  for (const company of source) {
    if (company.countInTechSummary === false) continue
    const interval = companyInterval(company)
    const monthsInRole = interval[1] - interval[0]

    for (const { group, items } of stackEntries(company.stack)) {
      for (const tech of items) {
        const list = byTech.get(tech) ?? []
        list.push(interval)
        byTech.set(tech, list)

        const gm = groupMonths.get(tech) ?? {}
        gm[group] = (gm[group] ?? 0) + monthsInRole
        groupMonths.set(tech, gm)
      }
    }
  }

  return [...byTech.entries()]
    .map(([name, intervals]) => {
      const months = mergedMonths(intervals)
      const years = months > 0 ? Math.max(1, Math.floor(months / 12)) : 0
      const gm = groupMonths.get(name) ?? {}
      const group =
        techGroupOrder.find((g) => (gm[g] ?? 0) === Math.max(...techGroupOrder.map((x) => gm[x] ?? 0))) ??
        'backend'
      return { name, group, months, years }
    })
    .filter((item) => item.months > 0)
    .sort((a, b) => b.months - a.months || a.name.localeCompare(b.name))
}

export function filterTechSummary(
  items: TechSummaryItem[],
  selectedGroups: TechGroup[],
): TechSummaryItem[] {
  if (selectedGroups.length === 0) return []
  return items.filter((item) => selectedGroups.includes(item.group))
}
