import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate"

export default function createGoalMetric(
  args: Partial<GoalMetricInterface>
): GoalMetricInterface {
  // const defaultValue = args.metricType?.defaultValue ?? 0

  return {
    ...{
      id: createUniqId(),
      createdDate: serializerDate(new Date()),
      metricType: null,
      value: null,
      goalDayId: null,
      metricTypeId: null,
    },
    ...args,
  }
}
