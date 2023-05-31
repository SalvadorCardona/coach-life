import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export default interface GoalObjectiveInterface {
  id: string
  byTypeTime: TimePeriodEnum
  value: number
  metricTypeId: MetricTypeInterface["id"]
  name: string
  type: GoalObjectiveTypeEnum
}
