import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { get, update } from "@/module/Shared/Domain/repository.ts"

const name = "goal-type"

export function persistGoalTypes(goalTypes: GoalTypeInterface[]): void {
  update(name, goalTypes)
}

export function getGoalTypes(): GoalTypeInterface[] {
  return get<GoalTypeInterface[]>(name) ?? []
}
