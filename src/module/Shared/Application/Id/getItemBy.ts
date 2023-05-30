export default function getItemBy<T>(
  key: keyof T,
  value: unknown,
  list: T[]
): T | undefined {
  return list.find((item) => item[key] === value) as T
}
