import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DayTableItemComponent } from "@/module/Application/Page/DayPage/Component/DayTableItemComponent.tsx"
import createGoalMetricList from "@/module/GoalMetric/Domain/createGoalMetricList.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"

export interface DayComponentPropsInterface {
  day: DayInterface
  metricTypes: MetricTypeInterface[]
  onUpdateDay: (day: DayInterface) => void
}

export function DayTableComponent(props: DayComponentPropsInterface) {
  const updateHandler = (goalMetric: GoalMetricInterface) => {
    updateById(goalMetric, props.day.goalMetrics)
    props.onUpdateDay(props.day)
  }

  return (
    <>
      <TitleComponent>Your data goal</TitleComponent>
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
            {createGoalMetricList(props.day.goalMetrics, props.metricTypes).map(
              (goalMetric) => (
                <DayTableItemComponent
                  key={goalMetric.id}
                  onUpdate={updateHandler}
                  goalMetric={goalMetric}
                />
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
