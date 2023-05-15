import GoalInterface from "@/module/Goal/Domain/GoalInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/uniqId.ts"
import TimePeriodEnum from "@/module/Shared/Application/Date/TimePeriodEnum.ts"

interface CreateGoalInterface {
  goalType: GoalTypeInterface
  name: string
  timePeriod: TimePeriodEnum
}

export default function createGoal(args: CreateGoalInterface): GoalInterface {
  return {
    ...{
      id: createUniqId(),
    },
    ...args,
  }
}
