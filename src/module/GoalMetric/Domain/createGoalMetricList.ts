import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import createGoalMetric from "@/module/GoalMetric/Domain/createGoalMetric.ts"

export default function createGoalMetricList(
  goalMetrics: GoalMetricInterface[],
  metricTypes: MetricTypeInterface[]
): GoalMetricInterface[] {
  return metricTypes.map((metricType) => {
    const goalMetric: GoalMetricInterface | undefined = goalMetrics.find(
      (goalMetric) => goalMetric.metricType?.id === metricType.id
    )

    return goalMetric ?? createGoalMetric({ metricType: metricType })
  })
}
