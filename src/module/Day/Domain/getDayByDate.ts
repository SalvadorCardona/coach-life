import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import isSameDay from "@/module/Shared/Application/Date/isSameDay.ts"

export const getDayByDate = (
  date: DateString,
  days: DayInterface[]
): DayInterface | undefined => {
  return days.find((day) => isSameDay(day.createdDate, date))
}
