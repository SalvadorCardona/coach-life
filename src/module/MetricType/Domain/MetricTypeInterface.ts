import MetricTypeMetricEnum from "@/module/MetricType/Domain/MetricTypeMetricEnum.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"

export default interface MetricTypeInterface {
  id: string
  name: string
  defaultValue: number
  metric: MetricTypeMetricEnum
  goalObjectives?: GoalObjectiveInterface[]
  goalMetrics?: GoalMetricInterface[]
}
