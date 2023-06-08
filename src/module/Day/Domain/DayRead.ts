import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import calculateDayObjective from "@/module/Objective/Domain/calculate/calculateDayObjective.ts"
import calculateMetricsObjective from "@/module/Objective/Domain/calculate/calculateMetricsObjective.ts"
import getMetricByMetricTypeId from "@/module/Metric/Domain/getMetricByMetricTypeId.ts"
import createMetric from "@/module/Metric/Domain/createMetric.ts"

export interface DayReadInterface extends DayInterface {
  score: Ratio | null
  metrics: MetricReadInterface[]
}

export interface MetricReadInterface extends MetricInterface {
  score: Ratio | null
  metricType: ReadMetricTypeInterface
}

export function createMetricRead(
  metric: MetricInterface,
  metricTypes: ReadMetricTypeInterface[]
): MetricReadInterface | undefined {
  const currentMetricType = getItemById<ReadMetricTypeInterface>(
    metric.metricTypeId as string,
    metricTypes
  )
  if (!currentMetricType) {
    return undefined
  }

  return {
    ...metric,
    ...{
      score: calculateMetricsObjective(metric, currentMetricType.objectives),
      metricType: currentMetricType,
    },
  }
}

export interface ObjectiveReadInterface extends ObjectiveInterface {
  metricType: ReadMetricTypeInterface
}

export interface ReadMetricTypeInterface extends MetricTypeInterface {
  objectives: ObjectiveReadInterface[]
  metrics?: MetricInterface[]
}

export function createObjectiveRead(
  metricType: ReadMetricTypeInterface,
  objective: ObjectiveInterface
): ObjectiveReadInterface {
  return {
    ...objective,
    ...{
      metricType: metricType,
    },
  }
}
export function createMetricTypeRead(
  metricType: MetricTypeInterface,
  objectives: ObjectiveInterface[]
): ReadMetricTypeInterface {
  const currentObjective = getObjectiveByMetricTypeId(metricType.id, objectives)
  const metricTypeRead: ReadMetricTypeInterface = {
    ...metricType,
    ...{ objectives: [] },
  }

  metricTypeRead.objectives = currentObjective.map((objective) =>
    createObjectiveRead(metricTypeRead, objective)
  )

  return metricTypeRead
}

interface CreateDayReadParams {
  day: DayInterface
  objectives: ObjectiveInterface[]
  metricTypes: MetricTypeInterface[]
}

export function createDayRead(args: CreateDayReadParams): DayReadInterface {
  const metricTypeReads: ReadMetricTypeInterface[] = args.metricTypes.map(
    (metricType) => createMetricTypeRead(metricType, args.objectives)
  )
  const metrics: MetricReadInterface[] = []
  args.metricTypes.forEach((metricType) => {
    const metric =
      getMetricByMetricTypeId(args.day.metrics, metricType.id) ??
      createMetric({ metricTypeId: metricType.id, dayId: args.day.id })
    metrics.push(<MetricReadInterface>createMetricRead(metric, metricTypeReads))
  })

  return {
    ...args.day,
    ...{
      metrics: metrics,
      score: calculateDayObjective(args.day, args.objectives, args.metricTypes),
    },
  }
}
