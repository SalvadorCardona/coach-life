import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { GoalObjectiveItemComponent } from "@/module/GoalObjective/Component/GoalObjectiveItemComponent.tsx"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import getById from "@/module/Shared/Application/Id/getById.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface GoalObjectiveListComponentPropsInterface {
  goalObjectives: GoalObjectiveInterface[]
  removeGoalObjectiveById: (id: string) => void
  goalTypes: GoalTypeInterface[]
}

export function GoalObjectiveListComponent({
  goalObjectives,
  goalTypes,
  removeGoalObjectiveById,
}: GoalObjectiveListComponentPropsInterface) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Objective name</Th>
              <Th>Goal</Th>
              <Th>By time</Th>
              <Th>Value</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {goalObjectives.map((goalObjective) => {
              return (
                <GoalObjectiveItemComponent
                  goalObjective={goalObjective}
                  key={goalObjective.id}
                  goalType={
                    getById(goalObjective.goalId, goalTypes) as GoalTypeInterface
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
