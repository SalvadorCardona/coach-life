import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import isDateString from "@/module/Shared/Application/Date/isDateString.ts"

export default function deSerializerDate(date: DateString | Date): Date {
  if (isDateString(date)) date = new Date(date)

  return date as Date
}
