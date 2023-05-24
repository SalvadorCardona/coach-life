import { restore, update } from "@/module/Shared/Infratructure/repository.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

const name = "objective-type"

export function persistObjectType(days: GoalObjectiveInterface[]): void {
  update(name, days)
}

export function restoreObjectType(): GoalObjectiveInterface[] {
  return restore<GoalObjectiveInterface[]>(name) ?? []
}
