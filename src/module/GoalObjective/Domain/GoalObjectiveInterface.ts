import GoalInterface from "@/module/Goal/Domain/GoalInterface.ts"
import TimePeriodEnum from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import GoalObjectiveTypeEnum from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"

export default interface GoalObjectiveInterface {
  id: string
  byTypeTime: TimePeriodEnum
  value: number
  goalId: GoalInterface["id"]
  name: string
  type: GoalObjectiveTypeEnum
}
