import { restore, update } from "@/module/Shared/Infratructure/repository.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"

const name = "metric-type"

export function persistMetric(metrics: MetricInterface[]): void {
  update(name, metrics)
}

export function restoreMetric(): MetricInterface[] {
  return restore<MetricInterface[]>(name) ?? []
}
