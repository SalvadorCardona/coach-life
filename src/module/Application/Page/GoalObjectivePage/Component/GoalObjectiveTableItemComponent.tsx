import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { Tr, Td } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { RxCross2 } from "react-icons/all"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"

export interface GoalObjectiveItemComponentPropsInterface {
  goalObjective: GoalObjectiveInterface
  removeGoalObjectiveById: (id: string) => void
  metricType: MetricTypeInterface | undefined
}

export function GoalObjectiveTableItemComponent({
  goalObjective,
  removeGoalObjectiveById,
  metricType,
}: GoalObjectiveItemComponentPropsInterface) {
  const metricTypeName = metricType ? metricType.name : "-"
  return (
    <>
      <Tr>
        <Td>{goalObjective.name}</Td>
        <Td>{metricTypeName}</Td>
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
