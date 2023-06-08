import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { Tr, Td } from "@chakra-ui/react"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { RemoveButtonComponent } from "@/module/Shared/Component/Form/RemoveButtonComponent.tsx"

export interface GoalObjectiveItemComponentPropsInterface {
  objective: ObjectiveInterface
  removeGoalObjectiveById: (id: string) => void
  metricType: MetricTypeInterface | undefined
}

export function ObjectiveTableItemComponent({
  objective,
  removeGoalObjectiveById,
  metricType,
}: GoalObjectiveItemComponentPropsInterface) {
  const metricTypeName = metricType ? metricType.name : "-"
  return (
    <>
      <Tr>
        <Td>{objective.name}</Td>
        <Td>{metricTypeName}</Td>
        <Td>{objective.byTypeTime}</Td>
        <Td>{objective.type}</Td>
        <Td>{objective.value}</Td>
        <Td>
          <RemoveButtonComponent
            {...{
              colorScheme: "red",
              onClick: () => removeGoalObjectiveById(objective.id),
            }}
          ></RemoveButtonComponent>
        </Td>
      </Tr>
    </>
  )
}
