import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"

export default function createDay(
  goalDays: GoalDayInterface[] = [],
  createdDate: DateString = serializerDate(new Date())
): DayInterface {
  return {
    id: createUniqId(),
    goalDays: goalDays,
    createdDate: createdDate,
  }
}
