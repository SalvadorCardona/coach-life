import { GoalTypeListComponent } from "@/module/GoalType/Component/GoalTypeListComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { Box, Flex } from "@chakra-ui/react"
import { GoalTypeFormComponent } from "@/module/GoalType/Component/GoalTypeFormComponent.tsx"

export function GoalTypePage() {
  const goalTypesStore = useGoalTypeStore()
  return (
    <>
      <Flex>
        <Box mr={5}>
          <GoalTypeListComponent
            removeGoalType={goalTypesStore.removeGoalType}
            updateGoalType={goalTypesStore.updateGoalType}
            goalTypes={goalTypesStore.goalTypes}
          />
        </Box>
        <Box>
          <GoalTypeFormComponent updateGoalType={goalTypesStore.updateGoalType} />
        </Box>
      </Flex>
    </>
  )
}
