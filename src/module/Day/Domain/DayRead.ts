import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"

export interface DayReadInterface extends DayInterface {
  score: Ratio
  metrics: MetricRead[]
}

export interface MetricRead extends MetricInterface {
  score: Ratio
  metricType: MetricTypeRead
}

export function createMetricRead(
  metric: MetricInterface,
  metricTypes: MetricTypeRead[]
): MetricRead {
  return {
    score: 0,
    metricType: getItemById(metric.metricTypeId as string, metricTypes),
  }
}

export interface ObjectiveRead extends ObjectiveInterface {
  metricType: MetricTypeRead
}

export interface MetricTypeRead extends MetricTypeInterface {
  objectives: ObjectiveRead[]
}

export function createObjectiveRead(
  metricType: MetricTypeRead,
  objective: ObjectiveInterface
): ObjectiveRead {
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
): MetricTypeRead {
  const currentObjective = getObjectiveByMetricTypeId(metricType.id, objectives)
  const metricTypeRead: MetricTypeRead = {
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
  const metricTypeRead: MetricTypeRead[] = args.metricTypes.map((metricType) =>
    createMetricTypeRead(metricType, args.objectives)
  )

  const dayRead: DayReadInterface = {
    ...args.day,
    ...{
      metrics: args.day.metrics.map((metric) =>
        createMetricRead(metric, metricTypeRead)
      ),
    },
  }

  return dayRead
}
