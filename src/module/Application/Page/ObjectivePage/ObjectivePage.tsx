import { Box, Flex } from "@chakra-ui/react"
import { ObjectiveTableComponent } from "@/module/Application/Page/ObjectivePage/Component/ObjectiveTableComponent.tsx"
import { ObjectiveFormComponent } from "@/module/Objective/Component/ObjectiveFormComponent.tsx"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"

export function ObjectivePage() {
  const objectivesStore = useObjectiveStore()
  const metricTypesStore = useMetricTypeStore()
  return (
    <>
      <Flex>
        <Box mr={5}>
          <ObjectiveTableComponent
            objectives={objectivesStore.items}
            metricTypes={metricTypesStore.items}
            removeGoalObjectiveById={objectivesStore.removeObjectiveById}
          />
        </Box>
        <Box>
          <ObjectiveFormComponent
            metricTypes={metricTypesStore.items}
            addGoalObjective={objectivesStore.updateObjective}
          />
        </Box>
      </Flex>
    </>
  )
}
