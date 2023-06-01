import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { Td, Tr, Icon } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"

import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { IoIosAdd } from "react-icons/io"
import { RxCross2 } from "react-icons/rx"

export interface MetricTypeComponentPropsInterface {
  metricType: MetricTypeInterface
  removeHandler: (metricType: MetricTypeInterface) => void
  openModal: (metricType: MetricTypeInterface) => void
  goalObjectives: GoalObjectiveInterface[]
}

export function MetricTypeTableItemComponent(
  props: MetricTypeComponentPropsInterface
) {
  return (
    <>
      <Tr>
        <Td>
          {props.metricType.name}
          <LightTextComponent fontSize="xs" as={"p"}>
            Number of objective: {props.goalObjectives.length}
          </LightTextComponent>

          {props.goalObjectives.map((goalObjective) => (
            <LightTextComponent fontSize={"xs"} ml={5} key={goalObjective.id}>
              • {goalObjective.name}
            </LightTextComponent>
          ))}

          <ButtonComponent
            mt={2}
            size="xs"
            leftIcon={<Icon as={IoIosAdd} color={"white"} />}
            onClick={() => props.openModal(props.metricType)}
          >
            Add a objective
          </ButtonComponent>
        </Td>
        <Td>{props.metricType.metric}</Td>
        <Td>{props.metricType.defaultValue}</Td>
        <Td>
          <ButtonComponent
            {...{
              colorScheme: "red",
              onClick: () => props.removeHandler(props.metricType),
            }}
          >
            <RxCross2 />
          </ButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
