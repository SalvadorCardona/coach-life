import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { Td, Tr } from "@chakra-ui/react"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"
import { MetricReadInterface } from "@/module/Day/Domain/DayRead.ts"
import { CircularStatComponent } from "@/module/Shared/Component/CircularStatComponent.tsx"
import { MetricInputComponent } from "@/module/Metric/Component/MetricInputComponent.tsx"

export interface GoalMetricComponentPropsInterface {
  metric: MetricReadInterface
  onUpdate: (metric: MetricInterface) => void
  objectives: ObjectiveInterface[]
}

export function DayTableItemComponent(props: GoalMetricComponentPropsInterface) {
  return (
    <>
      <Tr>
        <Td>
          {props.metric.metricType?.name}{" "}
          <LightTextComponent fontSize="xs" as={"p"}>
            Number of objective: {props.objectives.length}
          </LightTextComponent>
          {props.objectives.map((objective) => (
            <LightTextComponent fontSize={"xs"} ml={5} key={objective.id}>
              • {objective.name}
            </LightTextComponent>
          ))}
        </Td>
        {/*<Td>{metricType}</Td>*/}
        <Td>
          <MetricInputComponent
            metric={props.metric}
            onUpdate={props.onUpdate}
          ></MetricInputComponent>
        </Td>
        <Td>
          <CircularStatComponent ratio={props.metric.score}></CircularStatComponent>
        </Td>
      </Tr>
    </>
  )
}
