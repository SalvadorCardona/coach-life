import { MetricTypeTableComponent } from "@/module/Application/Page/MetricTypePage/Component/MetricTypeTableComponent.tsx"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import {
  Box,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react"
import { MetricTypeFormComponent } from "@/module/MetricType/Component/MetricTypeFormComponent.tsx"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { ObjectiveFormComponent } from "@/module/Objective/Component/ObjectiveFormComponent.tsx"
import { useState } from "react"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"

export function MetricTypePage() {
  const metricTypesStore = useMetricTypeStore()
  const objectivesStore = useObjectiveStore()
  const [metricType, setMetricType] = useState<MetricTypeInterface | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const addObjective = (metricType: MetricTypeInterface): void => {
    setMetricType(metricType)
    onOpen()
  }

  return (
    <>
      <Flex>
        <Box mr={5}>
          <MetricTypeTableComponent
            removeMetricType={metricTypesStore.removeMetricType}
            updateMetricType={metricTypesStore.updateMetricType}
            metricTypes={metricTypesStore.items}
            openModal={addObjective}
            objectives={objectivesStore.items}
          />
        </Box>
        <Box>
          <MetricTypeFormComponent
            updateMetricType={metricTypesStore.updateMetricType}
          />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ObjectiveFormComponent
            {...{
              metricType: metricType as MetricTypeInterface,
              addGoalObjective: objectivesStore.updateObjective,
              metricTypes: metricTypesStore.items,
            }}
          ></ObjectiveFormComponent>
        </ModalContent>
      </Modal>
    </>
  )
}
