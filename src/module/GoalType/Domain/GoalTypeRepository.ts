import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { get, update } from "@/module/shared/Domain/repository.ts"

const name = "goal-type"

export function persistGoals(goalTypes: GoalTypeInterface[]): void {
  update(name, goalTypes)
}

export function getGoals(): GoalTypeInterface[] | null {
  return get<GoalTypeInterface[]>(name)
}
