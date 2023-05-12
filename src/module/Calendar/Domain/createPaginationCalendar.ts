import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

export default function createPaginationCalendar(
  toDay: Date | DateString = new Date()
): Date[] {
  toDay = deSerializerDate(toDay)
  const maxDay = 3
  const days: Date[] = []

  for (let i = -maxDay; i <= maxDay; i++) {
    const date = new Date()
    date.setDate(toDay.getDate() - i)
    days.push(date)
  }

  return days.reverse()
}
