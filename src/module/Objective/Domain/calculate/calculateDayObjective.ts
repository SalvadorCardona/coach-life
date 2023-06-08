import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"

import calculateObjective from "@/module/Objective/Domain/calculate/calculateObjective.ts"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"

export default function calculateDayObjective(
  day: DayInterface,
  objectives: ObjectiveInterface[],
  metricTypes: MetricTypeInterface[]
): Ratio | null {
  let ratio = 0
  let calculated = 0

  if (objectives.length === 0) return null

  day.metrics.forEach((metric) => {
    if (!metric.metricTypeId) return
    const metricType = getItemById<MetricTypeInterface>(
      metric.metricTypeId,
      metricTypes
    )
    if (!metricType) return

    const metricValue = metric.value ?? 1
    const objectivesCurrent = getObjectiveByMetricTypeId(metricType.id, objectives)

    if (metric.value === null || !metricType?.id) return
    if (!objectivesCurrent.length) return

    calculated++
    objectivesCurrent.forEach((objective) => {
      ratio += calculateObjective(objective.value, metricValue, objective.type)
    })
  })

  if (!ratio && !calculated) return 0

  return (ratio / calculated) as Ratio
}
