export default function getListBy<T>(key: keyof T, value: unknown, list: T[]): T[] {
  return list.filter((item) => item[key] === value)
}
