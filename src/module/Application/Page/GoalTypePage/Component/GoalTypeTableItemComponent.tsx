import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { Td, Tr, Icon } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { IoIosAdd, RxCross2 } from "react-icons/all"
import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

export interface GoalTypeComponentPropsInterface {
  goalType: GoalTypeInterface
  removeHandler: (goalType: GoalTypeInterface) => void
  openModal: (goalType: GoalTypeInterface) => void
  goalObjectives: GoalObjectiveInterface[]
}

export function GoalTypeTableItemComponent(props: GoalTypeComponentPropsInterface) {
  return (
    <>
      <Tr>
        <Td>
          {props.goalType.name}
          <LightTextComponent fontSize="xs" as={"p"}>
            Nombre d'ojectif : {props.goalObjectives.length}
          </LightTextComponent>

          {props.goalObjectives.map((goalObjective) => (
            <LightTextComponent fontSize={"xs"} ml={5}>
              • {goalObjective.name}
            </LightTextComponent>
          ))}

          <ButtonComponent
            mt={2}
            size="xs"
            leftIcon={<Icon as={IoIosAdd} color={"white"} />}
            onClick={() => props.openModal(props.goalType)}
          >
            Add a objective
          </ButtonComponent>
        </Td>
        <Td>{props.goalType.metric}</Td>
        <Td>{props.goalType.defaultValue}</Td>
        <Td>
          <ButtonComponent
            {...{
              colorScheme: "red",
              onClick: () => props.removeHandler(props.goalType),
            }}
          >
            <RxCross2 />
          </ButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
