import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import UnitEnum from "@/module/MetricType/Domain/UnitEnum.ts"

export function createMetricType(
  args: Partial<MetricTypeInterface> = {}
): MetricTypeInterface {
  return {
    ...{
      defaultValue: 0,
      id: createUniqId(),
      name: "",
      unit: UnitEnum.QUANTITY,
    },
    ...args,
  }
}
