import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import TimePeriodEnum from "@/module/Shared/Application/Date/TimePeriodEnum.ts"

export default interface GoalInterface {
  id: string
  name: string
  goalType: GoalTypeInterface
  timePeriod: TimePeriodEnum
}
