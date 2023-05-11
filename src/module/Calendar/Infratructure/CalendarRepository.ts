import { restore, update } from "@/module/Shared/Infratructure/repository.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"

const name = "calendar-type"

export function persistCalendar(currentDate: DateString): void {
  update(name, currentDate)
}

export function restoreCalendar(): DateString {
  let calendar = restore<DateString>(name)
  if (!calendar) {
    calendar = serializerDate(new Date())
  }

  return calendar
}
