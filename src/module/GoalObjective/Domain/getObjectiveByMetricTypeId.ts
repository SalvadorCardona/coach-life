import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import getListBy from "@/module/Shared/Application/Id/getListBy.ts"

export default function getObjectiveByMetricTypeId(
  idMetricType: MetricTypeInterface["id"],
  objectives: GoalObjectiveInterface[]
): GoalObjectiveInterface[] {
  return getListBy("metricTypeId", idMetricType, objectives)
}
