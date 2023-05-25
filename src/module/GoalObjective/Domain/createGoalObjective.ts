import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/uniqId.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import GoalInterface from "@/module/Goal/Domain/GoalInterface.ts"
import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"

interface CreateGoalObjectiveInterface {
  byTypeTime?: TimePeriodEnum
  value?: number
  name?: string
  goalId?: GoalInterface["id"]
  type?: GoalObjectiveTypeEnum
}

export default function createGoalObjective(
  args: CreateGoalObjectiveInterface = {}
): GoalObjectiveInterface {
  console.log("qui m")
  return {
    ...{
      id: createUniqId(),
      value: 0,
      name: "",
      byTypeTime: TimePeriodEnum.DAY,
      goalId: "",
      type: GoalObjectiveTypeEnum.TO_EXCEED,
    },
    ...args,
  }
}
