import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/uniqId.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate"

export default function createGoalDay(
  goalType: GoalTypeInterface | null = null
): GoalDayInterface {
  const defaultValue = goalType?.defaultValue ?? 0
  return {
    id: createUniqId(),
    createdDate: serializerDate(new Date()),
    goalType: goalType,
    value: defaultValue,
  }
}
