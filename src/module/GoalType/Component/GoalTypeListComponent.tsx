import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalTypeComponent } from "@/module/GoalType/Component/GoalTypeComponent.tsx"
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

export interface GoalTypeListComponentPropsInterface {
  goalTypes: GoalTypeInterface[]
  updateGoalType: (goalType: GoalTypeInterface) => void
  removeGoalType: (goalType: GoalTypeInterface) => void
}

export function GoalTypeListComponent(props: GoalTypeListComponentPropsInterface) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Goal name</Th>
              <Th>Metric type</Th>
              <Th>Default Value</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.goalTypes.map((goalType) => (
              <GoalTypeComponent
                key={goalType.id}
                removeHandler={props.removeGoalType}
                goalType={goalType}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
