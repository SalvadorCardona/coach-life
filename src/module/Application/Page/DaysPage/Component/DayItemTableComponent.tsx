import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import {
  CircularProgress,
  CircularProgressLabel,
  Input,
  Td,
  Tr,
} from "@chakra-ui/react"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import createGoalMetric from "@/module/GoalMetric/Domain/createGoalMetric.ts"
import { useGoalObjectiveStore } from "@/module/GoalObjective/Application/GoalObjectiveStore.ts"
import calculateDayObjective from "@/module/GoalObjective/Domain/calculate/calculateDayObjective.ts"
import ratioTOPercentage from "@/module/Shared/Application/Math/ratioTOPercentage.ts"

export interface DayItemTableComponentPropsInterface {
  metricTypes: MetricTypeInterface[]
  day: DayInterface
  updateDay: (day: DayInterface) => void
}

export function DayItemTableComponent(props: DayItemTableComponentPropsInterface) {
  const goalObjectives = useGoalObjectiveStore().goalObjectives
  const ratio = ratioTOPercentage(calculateDayObjective(props.day, goalObjectives))
  const getGoalMetric = (
    day: DayInterface,
    metricType: MetricTypeInterface
  ): GoalMetricInterface | undefined => {
    return day.goalMetrics.find((goalMetric) => {
      return goalMetric.metricType?.id === metricType.id
    })
  }

  const updateGoalMetric = (
    value: string,
    day: DayInterface,
    goalMetric: GoalMetricInterface
  ) => {
    goalMetric.value = Number(value ?? 0)
    updateById(goalMetric, day.goalMetrics)

    props.updateDay(day)
  }

  return (
    <Tr>
      <Td>{formatDate(props.day.createdDate)}</Td>
      {props.metricTypes.map((metricType) => {
        const goalMetric =
          getGoalMetric(props.day, metricType) ??
          createGoalMetric({ metricType: metricType })
        return (
          <Td key={metricType.id}>
            <Input
              w={16}
              name={goalMetric.id}
              type="number"
              value={goalMetric.value ?? ""}
              placeholder={metricType.defaultValue.toString()}
              onChange={(event) =>
                updateGoalMetric(event.target.value, props.day, goalMetric)
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
