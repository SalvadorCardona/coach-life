import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"
import calculateObjective from "@/module/Objective/Domain/calculate/calculateObjective.ts"

export default function calculateMetricsObjective(
  metric: MetricInterface,
  objectives: ObjectiveInterface[]
): Ratio | null {
  let ratio = 0

  if (objectives.length === 0) return null

  objectives.forEach((objective) => {
    ratio += calculateObjective(objective.value, metric.value ?? 0, objective.type)
  })

  return ratio / objectives.length
}
