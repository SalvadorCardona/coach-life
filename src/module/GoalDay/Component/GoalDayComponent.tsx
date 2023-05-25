import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { ChangeEvent, useState } from "react"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"
import { Flex, Input, Td, Text, Tr } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"

export interface GoalDayComponentPropsInterface {
  goalDay: GoalDayInterface
  onUpdate: (goalDay: GoalDayInterface) => void
}

export function GoalDayComponent(props: GoalDayComponentPropsInterface) {
  const [goalDay, setGoalDay] = useState<GoalDayInterface>(props.goalDay)
  const increment = () => {
    goalDay.value++
    setGoalDay(goalDay)
    props.onUpdate(goalDay)
  }

  const decrement = () => {
    goalDay.value--
    setGoalDay(goalDay)
    props.onUpdate(goalDay)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    goalDay.value = Number(value)
    props.onUpdate(goalDay)
  }

  const metricType =
    goalDay.goalType?.metric === GoalTypeMetricEnum.QUANTITY ? "Qty" : "Hours"

  return (
    <>
      <Tr>
        <Td>{props.goalDay.goalType?.name}</Td>
        <Td>{metricType}</Td>
        <Td>
          <Flex alignItems={"center"}>
            <Input
              mr={1}
              name={"name"}
              type="number"
              value={goalDay.value}
              w={20}
              onChange={onChangeHandler}
            />
            <Text color={"gray"} fontSize={"sm"}>
              {metricType}
            </Text>
          </Flex>
        </Td>
        <Td>
          <ButtonComponent attributes={{ onClick: decrement, mr: 5 }}>
            -
          </ButtonComponent>
          <ButtonComponent attributes={{ onClick: increment }}>+</ButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
