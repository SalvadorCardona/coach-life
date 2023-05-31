/**
 *  Convert Date to this format MAI 2023
 */
export function formatDateWithoutDay(date: Date): string {
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long" })
}
