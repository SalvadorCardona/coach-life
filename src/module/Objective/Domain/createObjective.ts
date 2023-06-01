import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import { GoalObjectiveTypeEnum } from "@/module/Objective/Domain/GoalObjectiveTypeEnum.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

interface CreateGoalObjectiveInterface {
  byTypeTime?: TimePeriodEnum
  value?: number
  name?: string
  metricTypeId?: MetricTypeInterface["id"]
  type?: GoalObjectiveTypeEnum
}

export default function createObjective(
  args: CreateGoalObjectiveInterface = {}
): ObjectiveInterface {
  return {
    ...{
      id: createUniqId(),
      value: 0,
      name: "",
      byTypeTime: TimePeriodEnum.DAY,
      metricTypeId: "",
      type: GoalObjectiveTypeEnum.TO_EXCEED,
    },
    ...args,
  }
}
