import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { Tr, Td } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { RxCross2 } from "react-icons/all"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface GoalObjectiveItemComponentPropsInterface {
  goalObjective: GoalObjectiveInterface
  removeGoalObjectiveById: (id: string) => void
  goalType: GoalTypeInterface | undefined
}

export function GoalObjectiveItemComponent({
  goalObjective,
  removeGoalObjectiveById,
  goalType,
}: GoalObjectiveItemComponentPropsInterface) {
  const goalTypeName = goalType ? goalType.name : "-"
  return (
    <>
      <Tr>
        <Td>{goalObjective.name}</Td>
        <Td>{goalObjective.value}</Td>
        <Td>{goalObjective.byTypeTime}</Td>
        <Td>{goalTypeName}</Td>
        <Td>
          <ButtonComponent
            attributes={{
              colorScheme: "red",
              onClick: () => removeGoalObjectiveById(goalObjective.id),
            }}
          >
            <RxCross2 />
          </ButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
