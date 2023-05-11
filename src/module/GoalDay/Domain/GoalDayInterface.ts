import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType"

export default interface GoalDayInterface {
  id: string
  createdDate: DateString
  goalType: GoalTypeInterface | null
  value: number
}
