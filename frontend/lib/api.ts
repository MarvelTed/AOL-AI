import type {
  SkinOption,
  MarketEvent,
  NewsKeyword,
  PlayerCountData,
} from './cs2-types'

export const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '') ?? ''

async function apiFetch<T>(path: string): Promise<T> {
  const url = `${API_BASE}${path}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`API ${path} → ${res.status}`)
  return res.json()
}

export async function fetchSkins(): Promise<SkinOption[]> {
  return apiFetch<SkinOption[]>('/api/v1/skins')
}

export async function fetchSkinById(id: string): Promise<SkinOption | undefined> {
  return apiFetch<SkinOption>(`/api/v1/skins/${encodeURIComponent(id)}`)
}

export async function fetchPlayerCount(): Promise<PlayerCountData> {
  return apiFetch<PlayerCountData>('/api/v1/players')
}

export async function fetchMarketEvents(): Promise<MarketEvent[]> {
  return apiFetch<MarketEvent[]>('/api/v1/events')
}

export async function fetchNewsKeywords(): Promise<NewsKeyword[]> {
  return apiFetch<NewsKeyword[]>('/api/v1/keywords')
}
