import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"

export default function createDay(
  goalMetrics: GoalMetricInterface[] = [],
  createdDate: DateString = serializerDate(new Date())
): DayInterface {
  return {
    id: createUniqId(),
    goalMetrics: goalMetrics,
    createdDate: createdDate,
  }
}
