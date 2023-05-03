import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { get, update } from "@/module/Shared/Domain/repository.ts"

const name = "day-type"

export function persistDays(days: DayInterface[]): void {
  update(name, days)
}

export function getDays(): DayInterface[] {
  return get<DayInterface[]>(name) ?? []
}
