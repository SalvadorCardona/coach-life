import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export default interface GoalDayInterface {
  id: string
  createdDate: Date
  day: DayInterface | null
  goalType: GoalTypeInterface | null
  value: number
}
