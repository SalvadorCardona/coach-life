import { Box, Flex, useDisclosure } from "@chakra-ui/react"
import { ObjectiveTableComponent } from "@/module/Application/Page/ObjectivePage/Component/ObjectiveTableComponent.tsx"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { ObjectiveFormModalComponent } from "@/module/Objective/Component/ObjectiveFormModalComponent.tsx"
import { AddButtonComponent } from "@/module/Shared/Component/Form/AddButtonComponent.tsx"

export function ObjectivePage() {
  const objectivesStore = useObjectiveStore()
  const metricTypesStore = useMetricTypeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <AddButtonComponent onClick={onOpen}>Add new objective</AddButtonComponent>
      <Flex>
        <Box mr={5}>
          <ObjectiveTableComponent
            objectives={objectivesStore.items}
            metricTypes={metricTypesStore.items}
            removeGoalObjectiveById={objectivesStore.removeObjectiveById}
          />
        </Box>
      </Flex>
      <ObjectiveFormModalComponent
        {...{
          addGoalObjective: objectivesStore.updateObjective,
          metricTypes: metricTypesStore.items,
          isOpen: isOpen,
          onClose: onClose,
        }}
      ></ObjectiveFormModalComponent>
    </>
  )
}
