import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import { GoalObjectiveItemComponent } from "@/module/GoalObjective/Component/GoalObjectiveItemComponent.tsx"

export interface GoalObjectiveListComponentPropsInterface {
  goalObjectives: GoalObjectiveInterface[]
}

export function GoalObjectiveListComponent({
  goalObjectives,
}: GoalObjectiveListComponentPropsInterface) {
  return (
    <>
      <div>
        {goalObjectives.map((goalObjectives) => {
          return (
            <GoalObjectiveItemComponent
              goalObjective={goalObjectives}
              key={goalObjectives.id}
            />
          )
        })}
      </div>
    </>
  )
}
