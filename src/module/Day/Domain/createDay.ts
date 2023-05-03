import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { createUniqId } from "@/module/Shared/Domain/uniqId.ts"

export default function createDay(
  goalDays: GoalDayInterface[] = [],
  createdDate: Date = new Date()
): DayInterface {
  return {
    id: createUniqId(),
    goalDays: goalDays,
    createdDate: createdDate,
  }
}
