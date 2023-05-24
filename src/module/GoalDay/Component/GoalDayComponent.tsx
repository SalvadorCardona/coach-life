import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { useState } from "react"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"

export interface GoalDayComponentPropsInterface {
  goalDay: GoalDayInterface
  onUpdate: (goalDay: GoalDayInterface) => void
}

export function GoalDayComponent(props: GoalDayComponentPropsInterface) {
  const [goalDay] = useState<GoalDayInterface>(props.goalDay)
  const increment = () => {
    goalDay.value++
    props.onUpdate(goalDay)
  }

  const decrement = () => {
    goalDay.value--
    props.onUpdate(goalDay)
  }

  return (
    <WrapperComponent>
      <Heading as={"h4"} fontSize={"lg"}>
        {props.goalDay.goalType?.name}
      </Heading>
      <Flex alignItems={"center"} mt={4}>
        <Text color={"blue.600"} fontSize={"2xl"} as={"b"} mr={2}>
          {goalDay.value}
        </Text>
        <Text color={"grey"} fontSize={"lg"}>
          {goalDay.goalType?.metric === GoalTypeMetricEnum.QUANTITY
            ? "Qty"
            : "Hours"}
        </Text>
      </Flex>

      <Flex mt={4}>
        <Box>
          <ButtonComponent attributes={{ onClick: decrement }}>-</ButtonComponent>
        </Box>
        <Spacer />
        <Box>
          <ButtonComponent attributes={{ onClick: increment }}>+</ButtonComponent>
        </Box>
      </Flex>
    </WrapperComponent>
  )
}
