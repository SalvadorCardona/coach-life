import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { Td, Tr } from "@chakra-ui/react"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import getMetricByMetricTypeId from "@/module/Metric/Domain/getMetricByMetricTypeId.ts"
import { CircularStatComponent } from "@/module/Shared/Component/CircularStatComponent.tsx"
import { DayReadInterface } from "@/module/Day/Domain/DayRead.ts"
import { MetricInputComponent } from "@/module/Metric/Component/MetricInputComponent.tsx"

export interface DayItemTableComponentPropsInterface {
  metricTypes: MetricTypeInterface[]
  day: DayReadInterface
  onUpdate: (metric: MetricInterface) => void
}

export function DayItemTableComponent(props: DayItemTableComponentPropsInterface) {
  return (
    <Tr>
      <Td>{formatDate(props.day.createdDate)}</Td>
      {props.metricTypes.map((metricType) => {
        return (
          <Td key={metricType.id}>
            <MetricInputComponent
              metric={getMetricByMetricTypeId(props.day.metrics, metricType.id)}
              onUpdate={props.onUpdate}
            ></MetricInputComponent>
          </Td>
        )
      })}
      <Td>
        {props.day.score !== null && (
          <CircularStatComponent ratio={props.day.score}></CircularStatComponent>
        )}
      </Td>
    </Tr>
  )
}
