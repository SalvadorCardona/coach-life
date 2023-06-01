import { DayState } from "@/module/Day/Application/DayStore.ts"
import { MetricTypeState } from "@/module/MetricType/Application/MetricTypeStore.ts"
import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import { MetricState } from "@/module/Metric/Application/MetricStore.ts"

export function createMockData(
  dayStore: DayState,
  metricStore: MetricState,
  metricTypeStore: MetricTypeState
): void {
  const currentDate = new Date()

  const days = createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: dayStore.items,
    metrics: metricStore.items,
    metricTypes: metricTypeStore.items,
  }).reverse()

  days.forEach((day) => {
    day.metrics.forEach((metric) => {
      metric.value = Math.floor(Math.random() * 5)
    })
    dayStore.updateDay(day)
  })

  window.location.reload()
}
