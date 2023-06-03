import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"

import calculateObjective from "@/module/Objective/Domain/calculate/calculateObjective.ts"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"

export default function calculateDayObjective(
  day: DayInterface,
  objectives: ObjectiveInterface[]
): Ratio {
  let ratio = 0
  let calculated = 0

  day.metrics.forEach((metric) => {
    const metricType = metric.metricType

    if (metric.value === null || !metricType?.id) return

    const metricValue = metric.value ?? 1
    const objectivesCurrent = getObjectiveByMetricTypeId(
      metricType?.id as string,
      objectives
    )

    if (!objectivesCurrent.length) return

    calculated++
    objectivesCurrent.forEach((objective) => {
      ratio += calculateObjective(objective.value, metricValue, objective.type)
    })
  })

  if (!ratio && !calculated) return 0

  return (ratio / calculated) as Ratio
}
