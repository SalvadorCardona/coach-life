import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import getListBy from "@/module/Shared/Application/Id/getListBy.ts"

export default function getObjectiveByMetricTypeId(
  idMetricType: MetricTypeInterface["id"],
  objectives: ObjectiveInterface[]
): ObjectiveInterface[] {
  return getListBy("metricTypeId", idMetricType, objectives)
}
