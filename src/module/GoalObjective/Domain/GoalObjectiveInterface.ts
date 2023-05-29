import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export default interface GoalObjectiveInterface {
  id: string
  byTypeTime: TimePeriodEnum
  value: number
  goalTypeId: GoalTypeInterface["id"]
  name: string
  type: GoalObjectiveTypeEnum
}
