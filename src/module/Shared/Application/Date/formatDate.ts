import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

export function formatDate(date: Date | DateString): string {
  return deSerializerDate(date).toDateString()
}
