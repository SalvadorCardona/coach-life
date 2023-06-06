import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export default function getMetricListByMetricTypeId(
  metrics: MetricInterface[],
  metricTypeId: MetricTypeInterface["id"]
): MetricInterface[] {
  return metrics.filter((metric) => {
    return metric.metricTypeId === metricTypeId
  })
}
