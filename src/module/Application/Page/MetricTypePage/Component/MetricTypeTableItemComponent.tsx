import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { Td, Tr } from "@chakra-ui/react"

import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"

import { RemoveButtonComponent } from "@/module/Shared/Component/Form/RemoveButtonComponent.tsx"
import { AddButtonComponent } from "@/module/Shared/Component/Form/AddButtonComponent.tsx"

export interface MetricTypeComponentPropsInterface {
  metricType: MetricTypeInterface
  removeHandler: (metricType: MetricTypeInterface) => void
  openModal: (metricType: MetricTypeInterface) => void
  objectives: ObjectiveInterface[]
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
            Number of objective: {props.objectives.length}
          </LightTextComponent>

          {props.objectives.map((objective) => (
            <LightTextComponent fontSize={"xs"} ml={5} key={objective.id}>
              • {objective.name}
            </LightTextComponent>
          ))}
          <AddButtonComponent onClick={() => props.openModal(props.metricType)}>
            Add a objective
          </AddButtonComponent>
        </Td>
        <Td>{props.metricType.unit}</Td>
        {/*<Td>{props.metricType.defaultValue}</Td>*/}
        <Td>
          <RemoveButtonComponent
            {...{
              colorScheme: "red",
              onClick: () => props.removeHandler(props.metricType),
            }}
          ></RemoveButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
