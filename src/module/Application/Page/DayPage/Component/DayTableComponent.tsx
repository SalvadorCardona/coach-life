import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DayTableItemComponent } from "@/module/Application/Page/DayPage/Component/DayTableItemComponent.tsx"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { DayReadInterface } from "@/module/Day/Domain/DayRead.ts"

export interface DayComponentPropsInterface {
  day: DayReadInterface
  metricTypes: MetricTypeInterface[]
  updateMetric: (dayId: DayInterface["id"], metric: MetricInterface) => void
  objectives: ObjectiveInterface[]
}

export function DayTableComponent(props: DayComponentPropsInterface) {
  const updateHandler = (metric: MetricInterface) => {
    props.updateMetric(props.day.id, metric)
  }

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>Value</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.day.metrics.map((metric) => (
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
