import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { DayTableItemComponent } from "@/module/Application/Page/DayPage/Component/DayTableItemComponent.tsx"
import createGoalDayList from "@/module/GoalDay/Domain/createGoalDayList.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

export interface DayComponentPropsInterface {
  day: DayInterface
  goalTypes: GoalTypeInterface[]
  onUpdateDay: (day: DayInterface) => void
}

export function DayTableComponent(props: DayComponentPropsInterface) {
  const updateHandler = (goalDay: GoalDayInterface) => {
    updateById(goalDay, props.day.goalDays)
    props.onUpdateDay(props.day)
  }

  return (
    <>
      <TitleComponent>Your data goal</TitleComponent>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Goal name</Th>
              <Th>Metric Type</Th>
              <Th>Value</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createGoalDayList(props.day.goalDays, props.goalTypes).map(
              (goalDay) => (
                <DayTableItemComponent
                  key={goalDay.id}
                  onUpdate={updateHandler}
                  goalDay={goalDay}
                />
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
