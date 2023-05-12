import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

export function formatDate(date: Date | DateString): string {
  date = deSerializerDate(date)

  return new Intl.DateTimeFormat("fr-FR").format(date)
}
