import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalTypeComponent } from "@/module/GoalType/Component/GoalTypeComponent.tsx"
import { GoalTypeFormComponent } from "@/module/GoalType/Component/GoalTypeFormComponent.tsx"
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"

export interface GoalTypeListComponentPropsInterface {
  goalTypes: GoalTypeInterface[]
  updateGoalType: (goalType: GoalTypeInterface) => void
  removeGoalType: (goalType: GoalTypeInterface) => void
}

export function GoalTypeListComponent(props: GoalTypeListComponentPropsInterface) {
  return (
    <>
      <TitleComponent>Your goals types</TitleComponent>
      <div className={"mb-5"}>
        <GoalTypeFormComponent updateGoalType={props.updateGoalType} />
      </div>
      <SubTitleComponent>Your current goals types</SubTitleComponent>
      <div className={"mt-5"}>
        {props.goalTypes.map((goalType) => (
          <div className="mt-2" key={goalType.id}>
            <GoalTypeComponent
              removeHandler={props.removeGoalType}
              goalType={goalType}
            />
          </div>
        ))}
      </div>
    </>
  )
}
