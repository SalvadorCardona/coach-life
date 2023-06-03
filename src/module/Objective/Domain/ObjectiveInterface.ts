import { ObjectiveTypeEnum } from "@/module/Objective/Domain/ObjectiveTypeEnum.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export default interface ObjectiveInterface {
  id: string
  byTypeTime: TimePeriodEnum
  value: number
  metricTypeId: MetricTypeInterface["id"]
  name: string
  type: ObjectiveTypeEnum
}
