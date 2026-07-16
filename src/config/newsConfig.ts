import { articleNewsItems } from '@/config/news/articlesNews'
import { publicationNewsItems } from '@/config/news/publicationNews'
import { youtubeNewsItems } from '@/config/news/youtubeNews'

export type NewsType = 'article' | 'youtube' | 'publication'

export type NewsFilter = 'all' | NewsType

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

export function getHomeNewsGroups(
  items: NewsItem[],
  filter: NewsFilter,
  limitPerType = 3,
): NewsGroup[] {
  if (filter === 'all') {
    return newsTypeOrder
      .map((type) => ({
        type,
        items: filterNews(items, type).slice(0, limitPerType),
      }))
      .filter((group) => group.items.length > 0)
  }

  const filtered = filterNews(items, filter).slice(0, limitPerType)
  if (filtered.length === 0) return []
  return [{ type: filter, items: filtered }]
}
