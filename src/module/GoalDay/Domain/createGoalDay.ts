import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { createUniqId } from "@/module/shared/Domain/uniqId.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"

export default function createGoalDay(
  goalType: GoalTypeInterface | null = null,
  day: DayInterface | null = null
): GoalDayInterface {
  return {
    id: createUniqId(),
    createdDate: new Date(),
    day: day,
    goalType: goalType,
  }
}
