import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DayTableItemComponent } from "@/module/Application/Page/DayPage/Component/DayTableItemComponent.tsx"
import createMetricList from "@/module/Metric/Domain/createMetricList.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"

export interface DayComponentPropsInterface {
  day: DayInterface
  metricTypes: MetricTypeInterface[]
  onUpdateDay: (day: DayInterface) => void
  objectives: ObjectiveInterface[]
}

export function DayTableComponent(props: DayComponentPropsInterface) {
  const updateHandler = (metric: MetricInterface) => {
    updateById(metric, props.day.metrics)
    props.onUpdateDay(props.day)
  }

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>name</Th>
              {/*<Th>Metric Type</Th>*/}
              <Th>Value</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createMetricList(props.day.metrics, props.metricTypes).map((metric) => (
              <DayTableItemComponent
                key={metric.id}
                onUpdate={updateHandler}
                metric={metric}
                objectives={getObjectiveByMetricTypeId(
                  metric.metricTypeId as string,
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
