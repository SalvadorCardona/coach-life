import { restore, update } from "@/module/Shared/Infratructure/repository.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"

const name = "goal-metric-type"

export function persistGoalMetric(goalMetrics: GoalMetricInterface[]): void {
  update(name, goalMetrics)
}

export function restoreGoalMetric(): GoalMetricInterface[] {
  return restore<GoalMetricInterface[]>(name) ?? []
}
