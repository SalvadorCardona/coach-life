import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import createMetric from "@/module/Metric/Domain/createMetric.ts"

export default function createMetricList(
  metrics: MetricInterface[],
  metricTypes: MetricTypeInterface[]
): MetricInterface[] {
  return metricTypes.map((metricType) => {
    const metric: MetricInterface | undefined = metrics.find(
      (metric) => metric.metricType?.id === metricType.id
    )

    return metric ?? createMetric({ metricType: metricType })
  })
}
