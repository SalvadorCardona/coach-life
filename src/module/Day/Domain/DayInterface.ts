import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

export default interface DayInterface {
  id: string
  goalMetrics: GoalMetricInterface[]
  createdDate: DateString
}
