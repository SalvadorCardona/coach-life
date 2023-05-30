import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { GoalObjectiveTableItemComponent } from "@/module/Application/Page/GoalObjectivePage/Component/GoalObjectiveTableItemComponent.tsx"
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

export function GoalObjectiveTableComponent({
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
                    getById(goalObjective.goalTypeId, goalTypes) as GoalTypeInterface
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
