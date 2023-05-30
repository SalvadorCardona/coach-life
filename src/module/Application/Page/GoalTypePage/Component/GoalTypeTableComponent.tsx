import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalTypeTableItemComponent } from "@/module/Application/Page/GoalTypePage/Component/GoalTypeTableItemComponent.tsx"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

import getListBy from "@/module/Shared/Application/Id/getListBy.ts"

export interface GoalTypeListComponentPropsInterface {
  goalTypes: GoalTypeInterface[]
  updateGoalType: (goalType: GoalTypeInterface) => void
  removeGoalType: (goalType: GoalTypeInterface) => void
  openModal: (goalType: GoalTypeInterface) => void
  goalObjectives: GoalObjectiveInterface[]
}

export function GoalTypeTableComponent(props: GoalTypeListComponentPropsInterface) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
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
              <GoalTypeTableItemComponent
                key={goalType.id}
                removeHandler={props.removeGoalType}
                goalType={goalType}
                openModal={props.openModal}
                goalObjectives={
                  getListBy("goalTypeId", goalType.id, props.goalObjectives) ??
                  ([] as GoalObjectiveInterface[])
                }
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
