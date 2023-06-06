import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { Td, Tr } from "@chakra-ui/react"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import createMetric from "@/module/Metric/Domain/createMetric.ts"
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
        const metric =
          getMetricByMetricTypeId(props.day.metrics, metricType.id) ??
          createMetric({ metricTypeId: metricType.id })

        return (
          <Td key={metricType.id}>
            <MetricInputComponent
              metric={metric}
              onUpdate={props.onUpdate}
            ></MetricInputComponent>
          </Td>
        )
      })}
      <Td>
        <CircularStatComponent ratio={props.day.score}></CircularStatComponent>
      </Td>
    </Tr>
  )
}
