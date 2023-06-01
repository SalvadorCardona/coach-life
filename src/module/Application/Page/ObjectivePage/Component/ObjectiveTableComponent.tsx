import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { ObjectiveTableItemComponent } from "@/module/Application/Page/ObjectivePage/Component/ObjectiveTableItemComponent.tsx"
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export interface GoalObjectiveListComponentPropsInterface {
  objectives: ObjectiveInterface[]
  removeGoalObjectiveById: (id: string) => void
  metricTypes: MetricTypeInterface[]
}

export function ObjectiveTableComponent({
  objectives,
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
            {objectives.map((objective) => {
              return (
                <ObjectiveTableItemComponent
                  objective={objective}
                  key={objective.id}
                  metricType={
                    getItemById(
                      objective.metricTypeId,
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
