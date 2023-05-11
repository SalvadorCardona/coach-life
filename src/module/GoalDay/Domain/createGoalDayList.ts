import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import createGoalDay from "@/module/GoalDay/Domain/createGoalDay.ts"

export default function createGoalDayList(
  goalDays: GoalDayInterface[],
  goalTypes: GoalTypeInterface[]
): GoalDayInterface[] {
  return goalTypes.map((goalType) => {
    const goalDay: GoalDayInterface | undefined = goalDays.find(
      (goalDay) => goalDay.goalType?.id === goalType.id
    )

    return goalDay ?? createGoalDay(goalType)
  })
}
