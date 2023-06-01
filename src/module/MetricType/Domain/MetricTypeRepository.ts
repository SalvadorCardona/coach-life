import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { restore, update } from "@/module/Shared/Infratructure/repository.ts"

const name = "type"

export function persistMetricTypes(metricTypes: MetricTypeInterface[]): void {
  update(name, metricTypes)
}

export function getMetricTypes(): MetricTypeInterface[] {
  return restore<MetricTypeInterface[]>(name) ?? []
}
