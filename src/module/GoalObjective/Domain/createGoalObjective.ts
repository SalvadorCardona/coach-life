import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

interface CreateGoalObjectiveInterface {
  byTypeTime?: TimePeriodEnum
  value?: number
  name?: string
  goalId?: MetricTypeInterface["id"]
  type?: GoalObjectiveTypeEnum
}

export default function createGoalObjective(
  args: CreateGoalObjectiveInterface = {}
): GoalObjectiveInterface {
  return {
    ...{
      id: createUniqId(),
      value: 0,
      name: "",
      byTypeTime: TimePeriodEnum.DAY,
      goalId: "",
      type: GoalObjectiveTypeEnum.TO_EXCEED,
    },
    ...args,
  }
}
