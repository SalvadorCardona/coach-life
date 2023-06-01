import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"

import calculateObjective from "@/module/GoalObjective/Domain/calculate/calculateObjective.ts"
import getObjectiveByMetricTypeId from "@/module/GoalObjective/Domain/getObjectiveByMetricTypeId.ts"

export default function calculateDayObjective(
  day: DayInterface,
  goalObjectives: GoalObjectiveInterface[]
): Ratio {
  let ratio = 0
  let calculated = 0

  day.goalMetrics.forEach((goalMetric) => {
    const metricType = goalMetric.metricType
    if (goalMetric.value === null || metricType?.id) return
    const goalMetricValue = goalMetric.value ?? 1
    const goalObjectivesCurrent = getObjectiveByMetricTypeId(
      metricType?.id as string,
      goalObjectives
    )

    if (!goalObjectivesCurrent.length) return

    calculated++
    goalObjectivesCurrent.forEach((goalObjective) => {
      ratio += calculateObjective(
        goalObjective.value,
        goalMetricValue,
        goalObjective.type
      )
    })
  })

  if (!ratio && !calculated) return 0

  return (ratio / calculated) as Ratio
}