const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '')

export async function getPage(path) {
  const response = await fetch(`${API_URL}/api/page?path=${encodeURIComponent(path)}`)

  if (!response.ok) {
    throw new Error(`Помилка запиту: ${response.status}`)
  }

  return response.json()
}
