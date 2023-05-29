import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

interface CreateGoalObjectiveInterface {
  byTypeTime?: TimePeriodEnum
  value?: number
  name?: string
  goalId?: GoalTypeInterface["id"]
  type?: GoalObjectiveTypeEnum
}

export default function createGoalObjective(
  args: CreateGoalObjectiveInterface = {}
): GoalObjectiveInterface {
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
