import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { MetricTypeFormComponent } from "@/module/MetricType/Component/MetricTypeFormComponent.tsx"

export interface ModalMetricTypeFormComponentPropsInterface {
  updateMetricType: (metricType: MetricTypeInterface) => void
  isOpen: boolean
  onClose: () => void
}

export function ModalMetricTypeFormComponent(
  props: ModalMetricTypeFormComponentPropsInterface
) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <MetricTypeFormComponent
          onAdd={() => {
            props.onClose()
          }}
          updateMetricType={props.updateMetricType}
        ></MetricTypeFormComponent>
      </ModalContent>
    </Modal>
  )
}
