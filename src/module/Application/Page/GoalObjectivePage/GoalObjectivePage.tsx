import { Box, Flex } from "@chakra-ui/react"
import { GoalObjectiveTableComponent } from "@/module/Application/Page/GoalObjectivePage/Component/GoalObjectiveTableComponent.tsx"
import { GoalObjectiveFormComponent } from "@/module/GoalObjective/Component/GoalObjectiveFormComponent.tsx"
import { useGoalObjectiveStore } from "@/module/GoalObjective/Application/GoalObjectiveStore.ts"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"

export function GoalObjectivePage() {
  const goalObjectivesStore = useGoalObjectiveStore()
  const goalTypesStore = useGoalTypeStore()
  return (
    <>
      <Flex>
        <Box mr={5}>
          <GoalObjectiveTableComponent
            goalObjectives={goalObjectivesStore.goalObjectives}
            goalTypes={goalTypesStore.goalTypes}
            removeGoalObjectiveById={goalObjectivesStore.removeGoalObjectiveById}
          />
        </Box>
        <Box>
          <GoalObjectiveFormComponent
            goalTypes={goalTypesStore.goalTypes}
            addGoalObjective={goalObjectivesStore.updateGoalObjective}
          />
        </Box>
      </Flex>
    </>
  )
}
