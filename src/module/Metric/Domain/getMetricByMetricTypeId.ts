import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export default function getMetricByMetricTypeId(
  metrics: MetricInterface[],
  metricTypeId: MetricTypeInterface["id"]
): MetricInterface | undefined {
  return metrics.find((metric) => {
    return metric.metricType?.id === metricTypeId
  })
}
