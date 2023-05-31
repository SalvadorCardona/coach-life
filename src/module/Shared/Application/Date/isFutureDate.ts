import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

export default function isFutureDate(
  date1: Date | DateString,
  date2: Date | DateString
): boolean {
  date1 = deSerializerDate(date1)
  date2 = deSerializerDate(date2)

  return (
    date1.getFullYear() > date2.getFullYear() &&
    date1.getMonth() > date2.getMonth() &&
    date1.getDate() > date2.getDate()
  )
}
