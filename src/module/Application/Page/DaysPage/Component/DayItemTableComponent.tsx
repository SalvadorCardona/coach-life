import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import {
  CircularProgress,
  CircularProgressLabel,
  Input,
  Td,
  Tr,
} from "@chakra-ui/react"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import createGoalDay from "@/module/GoalDay/Domain/createGoalDay.ts"
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
  const getGoalDay = (
    day: DayInterface,
    goalType: GoalTypeInterface
  ): GoalDayInterface | undefined => {
    return day.goalDays.find((goalDay) => {
      return goalDay.goalType?.id === goalType.id
    })
  }

  const updateGoalDay = (
    value: string,
    day: DayInterface,
    goalDay: GoalDayInterface
  ) => {
    goalDay.value = Number(value ?? 0)
    updateById(goalDay, day.goalDays)

    props.updateDay(day)
  }

  return (
    <Tr>
      <Td>{formatDate(props.day.createdDate)}</Td>
      {props.goalTypes.map((goalType) => {
        const goalDay = getGoalDay(props.day, goalType) ?? createGoalDay(goalType)
        return (
          <Td key={goalType.id}>
            <Input
              w={16}
              name={goalDay.id}
              type="number"
              value={goalDay.value ?? ""}
              placeholder={goalType.defaultValue.toString()}
              onChange={(event) =>
                updateGoalDay(event.target.value, props.day, goalDay)
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
