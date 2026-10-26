const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '')

async function getJson(path) {
  const response = await fetch(`${API_URL}${path}`)

  if (!response.ok) {
    throw new Error(`Помилка запиту: ${response.status}`)
  }

  return response.json()
}

export function getCommon() {
  return getJson('/api/common')
}

export async function getPage(path) {
  return getJson(`/api/page?path=${encodeURIComponent(path)}`)
}
