import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

export default interface DayInterface {
  id: string
  goalDays: GoalDayInterface[]
  createdDate: DateString
}
