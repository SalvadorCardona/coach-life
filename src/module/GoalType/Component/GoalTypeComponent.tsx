import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { Flex, Spacer } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { RxCross2 } from "react-icons/all"

export interface GoalTypeComponentPropsInterface {
  goalType: GoalTypeInterface
  removeHandler: (goalType: GoalTypeInterface) => void
}

export function GoalTypeComponent(props: GoalTypeComponentPropsInterface) {
  return (
    <WrapperComponent>
      <Flex>
        <span>{props.goalType.name}</span>
        <Spacer />
        <ButtonComponent
          attributes={{
            onClick: () => props.removeHandler(props.goalType),
          }}
        >
          <RxCross2 />
        </ButtonComponent>
      </Flex>
    </WrapperComponent>
  )
}
