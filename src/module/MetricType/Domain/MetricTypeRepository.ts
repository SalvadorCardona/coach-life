import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { restore, update } from "@/module/Shared/Infratructure/repository.ts"

const name = "metric-type-type"

export function persistMetricTypes(metricTypes: MetricTypeInterface[]): void {
  update(name, metricTypes)
}

export function restoreMetricTypes(): MetricTypeInterface[] {
  return restore<MetricTypeInterface[]>(name) ?? []
}
