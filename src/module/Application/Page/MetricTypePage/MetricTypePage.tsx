import { MetricTypeTableComponent } from "@/module/Application/Page/MetricTypePage/Component/MetricTypeTableComponent.tsx"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { Box, Flex, useDisclosure } from "@chakra-ui/react"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { useState } from "react"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"
import { ObjectiveFormModalComponent } from "@/module/Objective/Component/ObjectiveFormModalComponent.tsx"
import { AddButtonComponent } from "@/module/Shared/Component/Form/AddButtonComponent.tsx"
import { ModalMetricTypeFormComponent } from "@/module/MetricType/Component/ModalMetricTypeFormComponent.tsx"

export function MetricTypePage() {
  const metricTypesStore = useMetricTypeStore()
  const objectivesStore = useObjectiveStore()
  const [metricType, setMetricType] = useState<MetricTypeInterface | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const metricModalDisclone = useDisclosure()
  const addObjective = (metricType: MetricTypeInterface): void => {
    setMetricType(metricType)
    onOpen()
  }

  return (
    <>
      <AddButtonComponent onClick={metricModalDisclone.onOpen}>
        Add new metric type
      </AddButtonComponent>
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
      </Flex>
      <ModalMetricTypeFormComponent
        updateMetricType={metricTypesStore.updateMetricType}
        isOpen={metricModalDisclone.isOpen}
        onClose={metricModalDisclone.onClose}
      ></ModalMetricTypeFormComponent>
      <ObjectiveFormModalComponent
        {...{
          metricType: metricType as MetricTypeInterface,
          addGoalObjective: objectivesStore.updateObjective,
          metricTypes: metricTypesStore.items,
          isOpen: isOpen,
          onClose: onClose,
        }}
      ></ObjectiveFormModalComponent>
    </>
  )
}
