import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import { ObjectiveTypeEnum } from "@/module/Objective/Domain/ObjectiveTypeEnum.ts"

export default function createObjective(
  args: Partial<ObjectiveInterface> = {}
): ObjectiveInterface {
  return {
    ...{
      id: createUniqId(),
      value: 0,
      name: "",
      byTypeTime: TimePeriodEnum.DAY,
      metricTypeId: "",
      type: ObjectiveTypeEnum.TO_EXCEED,
    },
    ...args,
  }
}
