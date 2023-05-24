import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalTypeComponent } from "@/module/GoalType/Component/GoalTypeComponent.tsx"
import { Box } from "@chakra-ui/react"

export interface GoalTypeListComponentPropsInterface {
  goalTypes: GoalTypeInterface[]
  updateGoalType: (goalType: GoalTypeInterface) => void
  removeGoalType: (goalType: GoalTypeInterface) => void
}

export function GoalTypeListComponent(props: GoalTypeListComponentPropsInterface) {
  return (
    <>
      {props.goalTypes.map((goalType) => (
        <Box className="mt-2" key={goalType.id}>
          <GoalTypeComponent
            removeHandler={props.removeGoalType}
            goalType={goalType}
          />
        </Box>
      ))}
    </>
  )
}
