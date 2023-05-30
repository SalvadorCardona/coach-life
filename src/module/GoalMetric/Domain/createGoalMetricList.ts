import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import createGoalMetric from "@/module/GoalMetric/Domain/createGoalMetric.ts"

export default function createGoalMetricList(
  goalMetrics: GoalMetricInterface[],
  goalTypes: GoalTypeInterface[]
): GoalMetricInterface[] {
  return goalTypes.map((goalType) => {
    const goalMetric: GoalMetricInterface | undefined = goalMetrics.find(
      (goalMetric) => goalMetric.goalType?.id === goalType.id
    )

    return goalMetric ?? createGoalMetric({ goalType: goalType })
  })
}
