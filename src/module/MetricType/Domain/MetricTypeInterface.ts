import MetricTypeMetricEnum from "@/module/MetricType/Domain/MetricTypeMetricEnum.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"

export default interface MetricTypeInterface {
  id: string
  name: string
  defaultValue: number
  metric: MetricTypeMetricEnum
  objectives?: ObjectiveInterface[]
  metrics?: MetricInterface[]
}
