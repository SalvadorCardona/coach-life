import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { MetricTypeTableItemComponent } from "@/module/Application/Page/MetricTypePage/Component/MetricTypeTableItemComponent.tsx"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import getObjectiveByMetricTypeId from "@/module/GoalObjective/Domain/getObjectiveByMetricTypeId.ts"

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
                goalObjectives={getObjectiveByMetricTypeId(
                  metricType.id,
                  props.goalObjectives
                )}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
