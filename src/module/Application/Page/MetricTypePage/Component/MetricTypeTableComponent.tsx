import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { MetricTypeTableItemComponent } from "@/module/Application/Page/MetricTypePage/Component/MetricTypeTableItemComponent.tsx"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"

export interface MetricTypeListComponentPropsInterface {
  metricTypes: MetricTypeInterface[]
  updateMetricType: (metricType: MetricTypeInterface) => void
  removeMetricType: (metricType: MetricTypeInterface) => void
  openModal: (metricType: MetricTypeInterface) => void
  objectives: ObjectiveInterface[]
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
              <Th>name</Th>
              <Th>Metric unity</Th>
              {/*<Th>Default Value</Th>*/}
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
                objectives={getObjectiveByMetricTypeId(
                  metricType.id,
                  props.objectives
                )}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
