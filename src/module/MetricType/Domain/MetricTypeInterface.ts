import UnitEnum from "@/module/MetricType/Domain/UnitEnum.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"

export default interface MetricTypeInterface {
  id: string
  name: string
  defaultValue: number
  unit: UnitEnum
}

export interface ReadMetricTypeInterface extends MetricTypeInterface {
  objectives?: ObjectiveInterface[]
  metrics?: MetricInterface[]
}
