import MonthEnum from "@/module/Shared/Application/Date/MonthEnum.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import getDaysInMonth from "@/module/Shared/Application/Date/getDaysInMonth.ts"
import { getDayByDate } from "@/module/Day/Domain/getDayByDate.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"
import createDay from "@/module/Day/Domain/createDay.ts"
import createMetricList from "@/module/Metric/Domain/createMetricList.ts"

interface ArgsInterface {
  month: MonthEnum
  year: number
  days: DayInterface[]
  metrics: MetricInterface[]
  metricTypes: MetricTypeInterface[]
}
export default function createDaysOfMonth(args: ArgsInterface): DayInterface[] {
  const daysOfMonth = getDaysInMonth(args.year, args.month)
  return daysOfMonth.map((date) => {
    return (
      getDayByDate(serializerDate(date), args.days) ??
      createDay({
        metrics: createMetricList(args.metrics, args.metricTypes),
        createdDate: serializerDate(date),
      })
    )
  })
}
