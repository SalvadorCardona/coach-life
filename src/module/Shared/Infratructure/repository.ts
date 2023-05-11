export function update(key: string, payload: unknown): void {
  localStorage.setItem(key, JSON.stringify(payload))
}

export function restore<T>(key: string): T | null {
  const data = localStorage.getItem(key)

  if (!data) return null

  return JSON.parse(data) as T
}
