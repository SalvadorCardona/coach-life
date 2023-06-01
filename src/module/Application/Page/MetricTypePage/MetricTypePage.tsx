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
import { GoalObjectiveFormComponent } from "@/module/GoalObjective/Component/GoalObjectiveFormComponent.tsx"
import { useState } from "react"
import { useGoalObjectiveStore } from "@/module/GoalObjective/Application/GoalObjectiveStore.ts"

export function MetricTypePage() {
  const metricTypesStore = useMetricTypeStore()
  const goalObjectivesStore = useGoalObjectiveStore()
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
            goalObjectives={goalObjectivesStore.goalObjectives}
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
          <GoalObjectiveFormComponent
            {...{
              metricType: metricType as MetricTypeInterface,
              addGoalObjective: goalObjectivesStore.updateGoalObjective,
              metricTypes: metricTypesStore.items,
            }}
          ></GoalObjectiveFormComponent>
        </ModalContent>
      </Modal>
    </>
  )
}
