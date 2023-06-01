import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType"

export default interface MetricInterface {
  id: string
  createdDate: DateString
  metricType: MetricTypeInterface | null
  metricTypeId: string | null
  dayId: string | null
  value: number | null
}
