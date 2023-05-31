import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { MetricTypeTableItemComponent } from "@/module/Application/Page/MetricTypePage/Component/MetricTypeTableItemComponent.tsx"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

import getListBy from "@/module/Shared/Application/Id/getListBy.ts"

export interface MetricTypeListComponentPropsInterface {
  metricTypes: MetricTypeInterface[]
  updateMetricType: (metricType: MetricTypeInterface) => void
  removeMetricType: (metricType: MetricTypeInterface) => void
  openModal: (metricType: MetricTypeInterface) => void
  goalObjectives: GoalObjectiveInterface[]
}

export function MetricTypeTableComponent(
  props: MetricTypeListComponentPropsInterface
) {
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
            {props.metricTypes.map((metricType) => (
              <MetricTypeTableItemComponent
                key={metricType.id}
                removeHandler={props.removeMetricType}
                metricType={metricType}
                openModal={props.openModal}
                goalObjectives={
                  getListBy("metricTypeId", metricType.id, props.goalObjectives) ??
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
