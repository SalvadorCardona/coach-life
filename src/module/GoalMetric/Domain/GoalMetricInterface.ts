import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType"

export default interface GoalMetricInterface {
  id: string
  createdDate: DateString
  metricType: MetricTypeInterface | null
  metricTypeId: string | null
  goalDayId: string | null
  value: number | null
}
