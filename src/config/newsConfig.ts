import { articleNewsItems } from '@/config/news/articlesNews'
import { publicationNewsItems } from '@/config/news/publicationNews'
import { youtubeNewsItems } from '@/config/news/youtubeNews'

export type NewsType = 'article' | 'youtube' | 'publication'

export type NewsFilter = 'all' | NewsType

export type NewsCountFilter = 'auto' | 1 | 3 | 5

export interface NewsItem {
  id: string
  type: NewsType
  /** ISO date YYYY-MM-DD */
  publishedAt: string
  /** i18n key under `news.*` (e.g. `articles.chatEncIdentity`) */
  titleKey: string
  url: string
  image?: string
  youtubeId?: string
}

export const newsItems: NewsItem[] = [
  ...articleNewsItems,
  ...youtubeNewsItems,
  ...publicationNewsItems,
]

export function sortNewsByDate(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function filterNews(items: NewsItem[], filter: NewsFilter): NewsItem[] {
  const filtered = filter === 'all' ? items : items.filter((item) => item.type === filter)
  return sortNewsByDate(filtered)
}

export interface NewsGroup {
  type: NewsType
  items: NewsItem[]
}

const newsTypeOrder: NewsType[] = ['article', 'youtube', 'publication']

/** Order on resume: minibooks → articles → YouTube */
const resumeNewsTypeOrder: NewsType[] = ['publication', 'article', 'youtube']

export const RESUME_NEWS_LIMIT = 10

export interface ResumeNewsGroup {
  type: NewsType
  items: NewsItem[]
  total: number
  hasMore: boolean
}

export function getResumeNewsGroups(
  items: NewsItem[] = newsItems,
  limit: number = RESUME_NEWS_LIMIT,
): ResumeNewsGroup[] {
  return resumeNewsTypeOrder
    .map((type) => {
      const all = filterNews(items, type)
      return {
        type,
        items: all.slice(0, limit),
        total: all.length,
        hasMore: all.length > limit,
      }
    })
    .filter((group) => group.total > 0)
}

export function getHomeNewsGroups(
  items: NewsItem[],
  selectedTypes: NewsType[],
  limitPerType: number,
): NewsGroup[] {
  return newsTypeOrder
    .filter((type) => selectedTypes.includes(type))
    .map((type) => ({
      type,
      items: filterNews(items, type).slice(0, limitPerType),
    }))
    .filter((group) => group.items.length > 0)
}

export function resolveHomeNewsLimit(countFilter: NewsCountFilter, isDesktop: boolean): number {
  if (countFilter === 'auto') return isDesktop ? 3 : 1
  return countFilter
}
