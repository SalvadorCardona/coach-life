export function update(key: string, payload: any): void {
  localStorage.setItem(key, JSON.stringify(payload))
}

export function get<T>(key: string): T | null {
  const data = localStorage.getItem(key)

  if (!data) return null

  return JSON.parse(data) as T
}
