import type { ResumeCompany } from './types'

/**
 * Internships / student practice (newest first).
 * Copy lives in i18n under `resume.internships.<i18nKey>`.
 */
export const resumeInternships: ResumeCompany[] = [
  {
    id: 'volvo-it-2007',
    i18nKey: 'volvoIt2007',
    name: 'Volvo IT',
    url: 'https://www.volvo.com',
    start: '2007-06',
    end: '2007-08',
    stack: {
      backend: ['.NET', 'C#', 'ASP', 'MS SQL Server', 'SSIS', 'VB Script'],
    },
  },
  {
    id: 'volvo-it-2006',
    i18nKey: 'volvoIt2006',
    name: 'Volvo IT',
    url: 'https://www.volvo.com',
    start: '2006-06',
    end: '2006-08',
    stack: {
      backend: ['.NET', 'C#', 'ASP', 'MS SQL Server'],
    },
  },
]
