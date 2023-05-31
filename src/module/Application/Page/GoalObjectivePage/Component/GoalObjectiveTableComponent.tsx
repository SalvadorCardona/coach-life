import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { GoalObjectiveTableItemComponent } from "@/module/Application/Page/GoalObjectivePage/Component/GoalObjectiveTableItemComponent.tsx"
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export interface GoalObjectiveListComponentPropsInterface {
  goalObjectives: GoalObjectiveInterface[]
  removeGoalObjectiveById: (id: string) => void
  metricTypes: MetricTypeInterface[]
}

export function GoalObjectiveTableComponent({
  goalObjectives,
  metricTypes,
  removeGoalObjectiveById,
}: GoalObjectiveListComponentPropsInterface) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Objective name</Th>
              <Th>Metric Type</Th>
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
                  metricType={
                    getItemById(
                      goalObjective.metricTypeId,
                      metricTypes
                    ) as MetricTypeInterface
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
