import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"

export default function createDay(
  goalDays: GoalDayInterface[] = [],
  createdDate: Date = new Date()
): DayInterface {
  return {
    goalDays: goalDays,
    createdDate: createdDate,
  }
}
