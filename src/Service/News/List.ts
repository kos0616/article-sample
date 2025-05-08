const API = import.meta.env.VITE_API_URL

type TypeRequest = {
  query?: string
  pageSize?: string
}

type TypeResponse = {
  status: 'ok' | string
  totalResults: number
  articles: TypeNews[]
}

export type TypeNews = {
  author: string
  content: string
  description: string
  // "2025-05-07T01:25:00Z"
  publishedAt: string
  source: {
    id: null
    // 'Slashdot.org'
    name: string
  }

  // 'New Bill Would Force Apple, Google To Open App Store Ecosystems'
  title: string
  // 'https://apple.slashdot.org/story/25/05/06/2252259/new-bill-would-force-apple-google-to-open-app-store-ecosystems'
  url: string
  // 'https://a.fsdn.com/sd/topics/topicgoogle_fb.gif'
  urlToImage: string
}

export default async function getAllMessage(req?: TypeRequest): Promise<TypeResponse> {
  const { query = '', pageSize = '' } = req || {}
  const url = new URL(API + '/api/news')
  url.searchParams.append('query', query || '')
  url.searchParams.append('pageSize', pageSize || '')

  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
