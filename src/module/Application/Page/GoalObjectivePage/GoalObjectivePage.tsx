import { Box, Flex } from "@chakra-ui/react"
import { GoalObjectiveTableComponent } from "@/module/Application/Page/GoalObjectivePage/Component/GoalObjectiveTableComponent.tsx"
import { GoalObjectiveFormComponent } from "@/module/GoalObjective/Component/GoalObjectiveFormComponent.tsx"
import { useGoalObjectiveStore } from "@/module/GoalObjective/Application/GoalObjectiveStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"

export function GoalObjectivePage() {
  const goalObjectivesStore = useGoalObjectiveStore()
  const metricTypesStore = useMetricTypeStore()
  return (
    <>
      <Flex>
        <Box mr={5}>
          <GoalObjectiveTableComponent
            goalObjectives={goalObjectivesStore.goalObjectives}
            metricTypes={metricTypesStore.items}
            removeGoalObjectiveById={goalObjectivesStore.removeGoalObjectiveById}
          />
        </Box>
        <Box>
          <GoalObjectiveFormComponent
            metricTypes={metricTypesStore.items}
            addGoalObjective={goalObjectivesStore.updateGoalObjective}
          />
        </Box>
      </Flex>
    </>
  )
}
