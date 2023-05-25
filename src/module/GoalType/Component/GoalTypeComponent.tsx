import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { Td, Tr } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { RxCross2 } from "react-icons/all"

export interface GoalTypeComponentPropsInterface {
  goalType: GoalTypeInterface
  removeHandler: (goalType: GoalTypeInterface) => void
}

export function GoalTypeComponent(props: GoalTypeComponentPropsInterface) {
  return (
    <Tr>
      <Td>{props.goalType.name}</Td>
      <Td>{props.goalType.metric}</Td>
      <Td>{props.goalType.defaultValue}</Td>
      <Td>
        <ButtonComponent
          attributes={{
            colorScheme: "red",
            onClick: () => props.removeHandler(props.goalType),
          }}
        >
          <RxCross2 />
        </ButtonComponent>
      </Td>
    </Tr>
  )
}
