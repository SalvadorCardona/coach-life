import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"

import calculateObjective from "@/module/GoalObjective/Domain/calculateObjective.ts"

export default function calculateDayObjective(
  day: DayInterface,
  goalObjectives: GoalObjectiveInterface[]
): Ratio | null {
  let ratio = 0
  let calculated = 0

  day.goalDays.forEach((goalDay) => {
    const goalType = goalDay.goalType
    const goalDayValue = goalDay.value ?? 1
    const goalObjectivesCurrent = goalObjectives.filter((goalObjective) => {
      return goalObjective.goalTypeId === goalType?.id
    })

    if (!goalObjectivesCurrent.length) return

    calculated++
    goalObjectivesCurrent.forEach((goalObjective) => {
      ratio += calculateObjective(
        goalObjective.value,
        goalDayValue,
        goalObjective.type
      )
    })
  })

  if (!ratio && !calculated) return null

  return (ratio / calculated) as Ratio
}
