import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import createDay from "@/module/Day/Domain/createDay.ts"

export const getDayByDate = (date: Date, days: DayInterface[]): DayInterface =>
  days.find((day) => day.createdDate === date) ?? createDay([], date)
