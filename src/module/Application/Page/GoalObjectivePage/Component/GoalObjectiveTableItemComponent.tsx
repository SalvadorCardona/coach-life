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

export function GoalObjectiveTableItemComponent({
  goalObjective,
  removeGoalObjectiveById,
  goalType,
}: GoalObjectiveItemComponentPropsInterface) {
  const goalTypeName = goalType ? goalType.name : "-"
  return (
    <>
      <Tr>
        <Td>{goalObjective.name}</Td>
        <Td>{goalTypeName}</Td>
        <Td>{goalObjective.byTypeTime}</Td>
        <Td>{goalObjective.type}</Td>
        <Td>{goalObjective.value}</Td>
        <Td>
          <ButtonComponent
            {...{
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
