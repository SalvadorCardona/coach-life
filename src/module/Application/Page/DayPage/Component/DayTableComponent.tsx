import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DayTableItemComponent } from "@/module/Application/Page/DayPage/Component/DayTableItemComponent.tsx"
import createMetricList from "@/module/Metric/Domain/createMetricList.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"

export interface DayComponentPropsInterface {
  day: DayInterface
  metricTypes: MetricTypeInterface[]
  onUpdateDay: (day: DayInterface) => void
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
              <Th>Goal name</Th>
              <Th>Metric Type</Th>
              <Th>Value</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createMetricList(props.day.metrics, props.metricTypes).map(
              (metric) => (
                <DayTableItemComponent
                  key={metric.id}
                  onUpdate={updateHandler}
                  metric={metric}
                />
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
