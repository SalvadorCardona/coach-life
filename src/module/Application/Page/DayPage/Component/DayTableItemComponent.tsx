import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import { ChangeEvent, useState } from "react"
import MetricTypeMetricEnum from "@/module/MetricType/Domain/MetricTypeMetricEnum.ts"
import { Flex, Input, Td, Text, Tr } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"

export interface GoalMetricComponentPropsInterface {
  goalMetric: GoalMetricInterface
  onUpdate: (goalMetric: GoalMetricInterface) => void
}

export function DayTableItemComponent(props: GoalMetricComponentPropsInterface) {
  const [goalMetric, setGoalMetric] = useState<GoalMetricInterface>(props.goalMetric)
  const increment = () => {
    goalMetric.value++
    setGoalMetric(goalMetric)
    props.onUpdate(goalMetric)
  }

  const decrement = () => {
    goalMetric.value--
    setGoalMetric(goalMetric)
    props.onUpdate(goalMetric)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    goalMetric.value = Number(value)
    props.onUpdate(goalMetric)
  }

  const metricType =
    goalMetric.metricType?.metric === MetricTypeMetricEnum.QUANTITY ? "Qty" : "Hours"

  return (
    <>
      <Tr>
        <Td>{props.goalMetric.metricType?.name}</Td>
        <Td>{metricType}</Td>
        <Td>
          <Flex alignItems={"center"}>
            <Input
              mr={1}
              name={"name"}
              type="number"
              value={goalMetric.value}
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
