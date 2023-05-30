import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
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
import calculateDayObjective from "@/module/GoalObjective/Domain/calculateDayObjective.ts"
import ratioTOPercentage from "@/module/Shared/Application/Math/ratioTOPercentage.ts"

export interface DayItemTableComponentPropsInterface {
  goalTypes: GoalTypeInterface[]
  day: DayInterface
  updateDay: (day: DayInterface) => void
}

export function DayItemTableComponent(props: DayItemTableComponentPropsInterface) {
  // TODO : replace by a props
  const goalObjectives = useGoalObjectiveStore().goalObjectives
  const getGoalMetric = (
    day: DayInterface,
    goalType: GoalTypeInterface
  ): GoalMetricInterface | undefined => {
    return day.goalMetrics.find((goalMetric) => {
      return goalMetric.goalType?.id === goalType.id
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
      {props.goalTypes.map((goalType) => {
        const goalMetric =
          getGoalMetric(props.day, goalType) ??
          createGoalMetric({ goalType: goalType })
        return (
          <Td key={goalType.id}>
            <Input
              w={16}
              name={goalMetric.id}
              type="number"
              value={goalMetric.value ?? ""}
              placeholder={goalType.defaultValue.toString()}
              onChange={(event) =>
                updateGoalMetric(event.target.value, props.day, goalMetric)
              }
            />
          </Td>
        )
      })}
      <Td>
        <CircularProgress
          value={ratioTOPercentage(calculateDayObjective(props.day, goalObjectives))}
          color="green.400"
        >
          <CircularProgressLabel>
            {ratioTOPercentage(calculateDayObjective(props.day, goalObjectives))} %
          </CircularProgressLabel>
        </CircularProgress>
      </Td>
    </Tr>
  )
}
