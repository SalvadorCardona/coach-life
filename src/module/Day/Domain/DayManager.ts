import DayInterface from "@/module/Day/Domain/DayInterface.ts"

export function getDayByDate(date: Date, days: DayInterface[]): DayInterface | null {
  return days.find((day) => day.createdDate === date) ?? null
}
