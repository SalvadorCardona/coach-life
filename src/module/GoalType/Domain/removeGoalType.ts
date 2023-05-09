import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import removeById from "@/module/Shared/Domain/Manager/Id/removeById.ts"

export function removeGoalType(
  goalType: GoalTypeInterface,
  goalTypes: GoalTypeInterface[]
): void {
  removeById(goalType.id, goalTypes)
}