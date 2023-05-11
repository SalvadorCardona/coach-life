import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { restore, update } from "@/module/Shared/Infratructure/repository.ts"

const name = "goal-type"

export function persistGoalTypes(goalTypes: GoalTypeInterface[]): void {
  update(name, goalTypes)
}

export function getGoalTypes(): GoalTypeInterface[] {
  return restore<GoalTypeInterface[]>(name) ?? []
}
