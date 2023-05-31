import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import MetricTypeMetricEnum from "@/module/MetricType/Domain/MetricTypeMetricEnum.ts"

export function createMetricType(): MetricTypeInterface {
  return {
    defaultValue: 0,
    id: createUniqId(),
    name: "",
    metric: MetricTypeMetricEnum.QUANTITY,
  }
}
