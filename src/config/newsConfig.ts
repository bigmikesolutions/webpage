export type NewsType = 'article' | 'youtube' | 'publication'

export type NewsFilter = 'all' | NewsType

export interface NewsItem {
  id: string
  type: NewsType
  /** ISO date YYYY-MM-DD */
  publishedAt: string
  /** i18n key under `news.*` */
  titleKey: string
  url: string
  image?: string
  youtubeId?: string
}

export const newsItems: NewsItem[] = [
  {
    id: 'chat-enc-identity',
    type: 'article',
    publishedAt: '2026-05-26',
    titleKey: 'articleTitleChatEncVsIdentity',
    url: 'https://bigmikelabs.pl/articles/chat-enc-identity',
    image: '/images/chat_enc_identity.jpg',
  },
  {
    id: 'abraham-wald',
    type: 'youtube',
    publishedAt: '2026-06-01',
    titleKey: 'videoTitleAbrahamWald',
    url: 'https://www.youtube.com/watch?v=7_CbSKbLJ7o',
    youtubeId: '7_CbSKbLJ7o',
  },
  {
    id: 'math4ai',
    type: 'publication',
    publishedAt: '2026-06-15',
    titleKey: 'articleTitleMath4Ai',
    url: 'https://bigmikelabs.pl/resources/math-for-ai-ml',
    image: '/images/math4ai.jpg',
  },
  {
    id: 'event-loops',
    type: 'article',
    publishedAt: '2025-03-16',
    titleKey: 'articleTitleEventLoops',
    url: 'https://bigmikelabs.pl/articles/event-loops-inc',
    image: '/images/event-loops.jpg',
  },
  {
    id: 'apple-m-processors',
    type: 'youtube',
    publishedAt: '2026-03-12',
    titleKey: 'videoTitleAppleM',
    url: 'https://www.youtube.com/watch?v=unz9yZUFAYU',
    youtubeId: 'unz9yZUFAYU',
  },
  {
    id: 'grpc-vs-http2',
    type: 'article',
    publishedAt: '2025-02-24',
    titleKey: 'articleTitleGrpcVsHttp2',
    url: 'https://bigmikelabs.pl/articles/grpc-takes-load-to-beat-http2',
    image: '/images/grpc-vs-http.jpg',
  },
  {
    id: 'ai-understands-text',
    type: 'youtube',
    publishedAt: '2026-01-14',
    titleKey: 'videoTitleAiText',
    url: 'https://www.youtube.com/watch?v=Ea5GGLnf-O8',
    youtubeId: 'Ea5GGLnf-O8',
  },
  {
    id: 'ai-revolution-jobs',
    type: 'youtube',
    publishedAt: '2025-12-18',
    titleKey: 'videoTitleAiRevolution',
    url: 'https://www.youtube.com/watch?v=SOOdUbEYkKw',
    youtubeId: 'SOOdUbEYkKw',
  },
  {
    id: 'apple-mie',
    type: 'youtube',
    publishedAt: '2025-11-26',
    titleKey: 'videoTitleAppleMie',
    url: 'https://www.youtube.com/watch?v=zyOrLgHEE6I',
    youtubeId: 'zyOrLgHEE6I',
  },
  {
    id: 'jdd-k8s',
    type: 'youtube',
    publishedAt: '2018-01-15',
    titleKey: 'videoTitleJddK8s',
    url: 'https://www.youtube.com/watch?v=-ffKVQzri-s',
    youtubeId: '-ffKVQzri-s',
  },
]

export function sortNewsByDate(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function filterNews(items: NewsItem[], filter: NewsFilter): NewsItem[] {
  const filtered = filter === 'all' ? items : items.filter((item) => item.type === filter)
  return sortNewsByDate(filtered)
}
