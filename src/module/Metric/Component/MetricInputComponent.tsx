import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import normalizer from "@/module/Shared/Application/Object/normalizer.ts"
import createMetric from "@/module/Metric/Domain/createMetric.ts"
import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react"
import { MetricReadInterface } from "@/module/Day/Domain/DayRead.ts"
import UnitEnum from "@/module/MetricType/Domain/UnitEnum.ts"

export interface MetricInputComponentPropsInterface {
  metric: MetricReadInterface
  onUpdate: (metric: MetricInterface) => void
}

export function MetricInputComponent(props: MetricInputComponentPropsInterface) {
  const onChangeHandler = (value: string) => {
    props.metric.value = Number(value)
    props.onUpdate(normalizer<MetricInterface>(props.metric, createMetric()))
  }

  const metricType =
    props.metric.metricType?.unit === UnitEnum.QUANTITY ? "Qty" : "Hours"

  const value: number = props.metric.value ?? 0

  return (
    <Flex alignItems={"center"}>
      <NumberInput
        mr={1}
        name={"name"}
        defaultValue={value}
        w={20}
        onChange={onChangeHandler}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text color={"gray"} fontSize={"sm"}>
        {metricType}
      </Text>
    </Flex>
  )
}
