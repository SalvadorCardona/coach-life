import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType"

export default interface GoalMetricInterface {
  id: string
  createdDate: DateString
  goalType: GoalTypeInterface | null
  goalTypeId: string | null
  goalDayId: string | null
  value: number | null
}
