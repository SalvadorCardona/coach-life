import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import addTo from "@/module/Shared/Application/List/addTo.ts"

export function addGoalType(
  goalType: GoalTypeInterface,
  goalTypes: GoalTypeInterface[]
): void {
  addTo(goalType, goalTypes)
}
