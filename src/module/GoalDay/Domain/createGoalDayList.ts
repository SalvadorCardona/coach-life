import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import createGoalDay from "@/module/GoalDay/Domain/createGoalDay.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"

export default function createGoalDayList(
  goalDays: GoalDayInterface[],
  goalTypes: GoalTypeInterface[],
  day: DayInterface | null = null
): GoalDayInterface[] {
  return goalTypes.map((goalType) => {
    const goalDay = goalDays.find((goalDay) => goalDay.goalType?.id === goalType.id)

    if (goalDay) return goalDay

    return createGoalDay(goalType, day)
  })
}
