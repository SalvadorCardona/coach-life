import { DayState } from "@/module/Day/Application/DayStore.ts"
import { MetricTypeState } from "@/module/MetricType/Application/MetricTypeStore.ts"
import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import { GoalMetricState } from "@/module/GoalMetric/Application/GoalMetricStore.ts"

export function createMockData(
  dayStore: DayState,
  goalMetricStore: GoalMetricState,
  metricTypeStore: MetricTypeState
): void {
  const currentDate = new Date()

  const days = createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: dayStore.items,
    goalMetrics: goalMetricStore.items,
    metricTypes: metricTypeStore.items,
  }).reverse()

  days.forEach((day) => {
    day.goalMetrics.forEach((metric) => {
      metric.value = Math.floor(Math.random() * 5)
    })
    dayStore.updateDay(day)
  })

  window.location.reload()
}
