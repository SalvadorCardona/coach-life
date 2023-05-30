import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { GoalObjectiveTableItemComponent } from "@/module/Application/Page/GoalObjectivePage/Component/GoalObjectiveTableItemComponent.tsx"
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface GoalObjectiveListComponentPropsInterface {
  goalObjectives: GoalObjectiveInterface[]
  removeGoalObjectiveById: (id: string) => void
  goalTypes: GoalTypeInterface[]
}

export function GoalObjectiveTableComponent({
  goalObjectives,
  goalTypes,
  removeGoalObjectiveById,
}: GoalObjectiveListComponentPropsInterface) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Objective name</Th>
              <Th>Goal Type</Th>
              <Th>By time</Th>
              <Th>Objective type</Th>
              <Th>Value</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {goalObjectives.map((goalObjective) => {
              return (
                <GoalObjectiveTableItemComponent
                  goalObjective={goalObjective}
                  key={goalObjective.id}
                  goalType={
                    getItemById(
                      goalObjective.goalTypeId,
                      goalTypes
                    ) as GoalTypeInterface
                  }
                  removeGoalObjectiveById={removeGoalObjectiveById}
                />
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
