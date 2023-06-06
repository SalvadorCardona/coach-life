import UnitEnum from "@/module/MetricType/Domain/UnitEnum.ts"

export default interface MetricTypeInterface {
  id: string
  name: string
  defaultValue: number
  unit: UnitEnum
}
