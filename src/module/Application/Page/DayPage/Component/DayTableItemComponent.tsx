import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { ChangeEvent, useState } from "react"
import UnitEnum from "@/module/MetricType/Domain/UnitEnum.ts"
import { Flex, Input, Td, Text, Tr } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"

export interface GoalMetricComponentPropsInterface {
  metric: MetricInterface
  onUpdate: (metric: MetricInterface) => void
  objectives: ObjectiveInterface[]
}

export function DayTableItemComponent(props: GoalMetricComponentPropsInterface) {
  const [metric, setGoalMetric] = useState<MetricInterface>(props.metric)
  metric?.value !== null ? metric.value : 0

  const increment = () => {
    metric.value++
    setGoalMetric(metric)
    props.onUpdate(metric)
  }

  const decrement = () => {
    metric.value--
    setGoalMetric(metric)
    props.onUpdate(metric)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    metric.value = Number(value)
    props.onUpdate(metric)
  }

  const metricType = metric.metricType?.unit === UnitEnum.QUANTITY ? "Qty" : "Hours"

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
          <Flex alignItems={"center"}>
            <Input
              mr={1}
              name={"name"}
              type="number"
              value={metric.value}
              w={20}
              onChange={onChangeHandler}
            />
            <Text color={"gray"} fontSize={"sm"}>
              {metricType}
            </Text>
          </Flex>
        </Td>
        <Td>
          <ButtonComponent {...{ onClick: decrement, mr: 5 }}>-</ButtonComponent>
          <ButtonComponent {...{ onClick: increment }}>+</ButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
