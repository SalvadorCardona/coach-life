import { createUniqId } from "@/module/shared/Domain/uniqId.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export function createGoalType(): GoalTypeInterface {
  return {
    defaultValue: 0,
    id: createUniqId(),
    name: "",
  }
}
