import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export default function getMetricsByMetricTypeId(
  metrics: GoalMetricInterface[],
  metricTypeId: MetricTypeInterface["id"]
): GoalMetricInterface[] {
  return metrics.filter((goalMetric) => {
    return goalMetric.metricType?.id === metricTypeId
  })
}
