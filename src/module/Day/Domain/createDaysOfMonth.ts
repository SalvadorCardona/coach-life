import MonthEnum from "@/module/Shared/Application/Date/MonthEnum.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import getDaysInMonth from "@/module/Shared/Application/Date/getDaysInMonth.ts"
import { getDayByDate } from "@/module/Day/Domain/getDayByDate.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"
import createDay from "@/module/Day/Domain/createDay.ts"
import createGoalMetricList from "@/module/GoalMetric/Domain/createGoalMetricList.ts"

interface ArgsInterface {
  month: MonthEnum
  year: number
  days: DayInterface[]
  goalMetrics: GoalMetricInterface[]
  metricTypes: MetricTypeInterface[]
}
export default function createDaysOfMonth(args: ArgsInterface): DayInterface[] {
  const daysOfMonth = getDaysInMonth(args.year, args.month)

  return daysOfMonth.map((date) => {
    return (
      getDayByDate(serializerDate(date), args.days) ??
      createDay({
        goalMetrics: createGoalMetricList(args.goalMetrics, args.metricTypes),
        createdDate: serializerDate(date),
      })
    )
  })
}
