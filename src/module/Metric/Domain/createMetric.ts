import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate"

export default function createMetric(
  args: Partial<MetricInterface>
): MetricInterface {
  // const defaultValue = args.metricType?.defaultValue ?? 0

  return {
    ...{
      id: createUniqId(),
      createdDate: serializerDate(new Date()),
      metricType: null,
      value: null,
      dayId: null,
      metricTypeId: null,
    },
    ...args,
  }
}
