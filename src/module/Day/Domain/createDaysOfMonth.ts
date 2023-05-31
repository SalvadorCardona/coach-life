import MonthEnum from "@/module/Shared/Application/Date/MonthEnum.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
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
  goalTypes: GoalTypeInterface[]
}
export default function createDaysOfMonth(args: ArgsInterface): DayInterface[] {
  const daysOfMonth = getDaysInMonth(args.year, args.month)

  return daysOfMonth.map((date) => {
    return (
      getDayByDate(serializerDate(date), args.days) ??
      createDay({
        goalMetrics: createGoalMetricList(args.goalMetrics, args.goalTypes),
        createdDate: serializerDate(date),
      })
    )
  })
}
