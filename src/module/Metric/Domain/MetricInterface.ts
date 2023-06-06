import { DateString } from "@/module/Shared/Application/Date/DateStringType"

export default interface MetricInterface {
  id: string
  createdDate: DateString
  metricTypeId: string | null
  dayId: string | null
  value: number | null
}
