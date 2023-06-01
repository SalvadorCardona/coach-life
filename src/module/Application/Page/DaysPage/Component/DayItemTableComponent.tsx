import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import {
  CircularProgress,
  CircularProgressLabel,
  Input,
  Td,
  Tr,
} from "@chakra-ui/react"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import createMetric from "@/module/Metric/Domain/createMetric.ts"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"
import calculateDayObjective from "@/module/Objective/Domain/calculate/calculateDayObjective.ts"
import ratioTOPercentage from "@/module/Shared/Application/Math/ratioTOPercentage.ts"

export interface DayItemTableComponentPropsInterface {
  metricTypes: MetricTypeInterface[]
  day: DayInterface
  updateDay: (day: DayInterface) => void
}

export function DayItemTableComponent(props: DayItemTableComponentPropsInterface) {
  const objectives = useObjectiveStore().items
  const ratio = ratioTOPercentage(calculateDayObjective(props.day, objectives))
  const getGoalMetric = (
    day: DayInterface,
    metricType: MetricTypeInterface
  ): MetricInterface | undefined => {
    return day.metrics.find((metric) => {
      return metric.metricType?.id === metricType.id
    })
  }

  const updateGoalMetric = (
    value: string,
    day: DayInterface,
    metric: MetricInterface
  ) => {
    metric.value = Number(value ?? 0)
    updateById(metric, day.metrics)

    props.updateDay(day)
  }

  return (
    <Tr>
      <Td>{formatDate(props.day.createdDate)}</Td>
      {props.metricTypes.map((metricType) => {
        const metric =
          getGoalMetric(props.day, metricType) ??
          createMetric({ metricType: metricType })
        return (
          <Td key={metricType.id}>
            <Input
              w={16}
              name={metric.id}
              type="number"
              value={metric.value ?? ""}
              placeholder={metricType.defaultValue.toString()}
              onChange={(event) =>
                updateGoalMetric(event.target.value, props.day, metric)
              }
            />
          </Td>
        )
      })}
      <Td>
        <CircularProgress
          value={ratio}
          color={ratio > 100 ? "green.400" : "red.400"}
        >
          <CircularProgressLabel>{ratio} %</CircularProgressLabel>
        </CircularProgress>
      </Td>
    </Tr>
  )
}
