import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { ObjectiveFormComponent } from "@/module/Objective/Component/ObjectiveFormComponent.tsx"

export interface ObjectiveFormModalComponentPropsInterface {
  addGoalObjective: (objective: ObjectiveInterface) => void
  metricTypes: MetricTypeInterface[]
  metricType?: MetricTypeInterface
  isOpen: boolean
  onClose: () => void
}

export function ObjectiveFormModalComponent(
  props: ObjectiveFormModalComponentPropsInterface
) {
  const onAdd = (objective: ObjectiveInterface) => {
    props.addGoalObjective(objective)
    props.onClose()
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ObjectiveFormComponent
          {...{
            metricType: props.metricType as MetricTypeInterface,
            addGoalObjective: onAdd,
            metricTypes: props.metricTypes,
          }}
        ></ObjectiveFormComponent>
      </ModalContent>
    </Modal>
  )
}
