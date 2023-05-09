import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { get, update } from "@/module/Shared/Domain/repository.ts"
import createDay from "@/module/Day/Domain/createDay.ts"

const name = "calendar-type"

export function persistCalendar(currentDay: DayInterface): void {
  update(name, currentDay)
}

export function getCalendar(): DayInterface {
  const calendar = get<DayInterface>(name) ?? createDay()
  if (typeof calendar.createdDate === "string") {
    calendar.createdDate = new Date(calendar.createdDate)
  }

  return calendar
}
