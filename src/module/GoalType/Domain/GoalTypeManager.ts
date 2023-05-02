import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export function addGoalType(
  goalType: GoalTypeInterface,
  goalTypes: GoalTypeInterface[]
): void {
  goalTypes.push(goalType)
}

export function removeGoalType(
  goalType: GoalTypeInterface,
  goalTypes: GoalTypeInterface[]
): void {
  const index = goalTypes.indexOf(goalType)
  goalTypes.splice(index, 1)
}

export function updateGoalType(
  goalType: GoalTypeInterface,
  goalTypes: GoalTypeInterface[]
): void {
  const index = goalTypes.indexOf(goalType)
  goalTypes.splice(index, 1, goalType)
}

export function getGoalTypeById(
  id: string,
  goalTypes: GoalTypeInterface[]
): GoalTypeInterface | undefined {
  return goalTypes.find((goalType) => goalType.id === id)
}
