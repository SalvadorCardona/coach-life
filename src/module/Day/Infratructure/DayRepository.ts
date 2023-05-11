import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { restore, update } from "@/module/Shared/Infratructure/repository.ts"

const name = "day-type"

export function persistDays(days: DayInterface[]): void {
  update(name, days)
}

export function restoreDays(): DayInterface[] {
  return restore<DayInterface[]>(name) ?? []
}
