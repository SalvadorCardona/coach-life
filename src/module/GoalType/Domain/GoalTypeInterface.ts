import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"

export default interface GoalTypeInterface {
  id: string
  name: string
  defaultValue: number
  metric: GoalTypeMetricEnum
  goalObjectives?: GoalObjectiveInterface[]
  goalMetrics?: GoalMetricInterface[]
}
