import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface DaysComponentPropsInterface {}

export function DaysPage(props: DaysComponentPropsInterface) {
  const dayStore = useDayStore()
  const goalTypeStore = useGoalTypeStore()

  const getGoalDay = (
    day: DayInterface,
    goalType: GoalTypeInterface
  ): GoalDayInterface | undefined => {
    return day.goalDays.find((goalDay) => {
      return goalDay.goalType?.id === goalType.id
    })
  }

  return (
    <>
      <>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Day</Th>
                {goalTypeStore.goalTypes.map((goalType) => {
                  return <Th>{goalType.name}</Th>
                })}
              </Tr>
            </Thead>
            <Tbody>
              {dayStore.days.map((day) => {
                return (
                  <Tr>
                    <Td>{formatDate(day.createdDate)}</Td>
                    {goalTypeStore.goalTypes.map((goalType) => {
                      const goalDay = getGoalDay(day, goalType)
                      return <Td>{goalDay ? goalDay.value : "-"}</Td>
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    </>
  )
}
