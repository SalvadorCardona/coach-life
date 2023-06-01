import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

export default interface DayInterface {
  id: string
  metrics: MetricInterface[]
  createdDate: DateString
}
