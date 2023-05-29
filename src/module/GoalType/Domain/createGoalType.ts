import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"

export function createGoalType(): GoalTypeInterface {
  return {
    defaultValue: 0,
    id: createUniqId(),
    name: "",
    metric: GoalTypeMetricEnum.QUANTITY,
  }
}
