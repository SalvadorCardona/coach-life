import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { DayItemTableComponent } from "@/module/Application/Page/DaysPage/Component/DayItemTableComponent.tsx"

export function DayListPage() {
  const dayStore = useDayStore()
  const goalTypeStore = useGoalTypeStore()

  return (
    <>
      <TableContainer style={{ overflowY: "unset", overflowX: "unset" }}>
        <Table variant="simple">
          <Thead style={{ position: "sticky", top: 0, zIndex: 1 }} bg={"white"}>
            <Tr>
              <Th>Day</Th>
              {goalTypeStore.goalTypes.map((goalType) => {
                return <Th key={goalType.id}>{goalType.name}</Th>
              })}
            </Tr>
          </Thead>
          <Tbody>
            {dayStore.days.map((day) => {
              return (
                <DayItemTableComponent
                  key={day.id}
                  day={day}
                  goalTypes={goalTypeStore.goalTypes}
                  updateDay={dayStore.updateDay}
                />
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
