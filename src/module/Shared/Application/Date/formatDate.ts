import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

/**
 *
 *  Convert Date to 01/05/2023
 */
export function formatDate(date: Date | DateString): string {
  date = deSerializerDate(date)

  return new Intl.DateTimeFormat(undefined).format(date)
}
