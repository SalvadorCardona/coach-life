import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalTypeComponent } from "@/module/GoalType/Component/GoalTypeComponent.tsx"
import { createGoalType } from "@/module/GoalType/Domain/CreateGoalType.ts"
import { addGoalType } from "@/module/GoalType/Domain/GoalTypeManager.ts"
import { useState } from "react"

export interface GoalTypeListComponentPropsInterface {
  goalTypeList: GoalTypeInterface[]
  updateGoalType: (goalTypes: GoalTypeInterface[]) => void
}

export function GoalTypeListComponent(props: GoalTypeListComponentPropsInterface) {
  const [newGoalTypeName, setNewGoalTypeName] = useState<string>("")
  const addGoalTypeHandler = () => {
    const newGoalType = createGoalType()
    newGoalType.name = newGoalTypeName
    addGoalType(newGoalType, props.goalTypeList)
    props.updateGoalType(props.goalTypeList)
  }

  return (
    <>
      <div>Hello GoalTypeListComponent</div>
      <div>
        {props.goalTypeList.map((goalType) => (
          <GoalTypeComponent
            key={goalType.id}
            goalType={goalType}
          ></GoalTypeComponent>
        ))}
      </div>
      <div className={"form-group"}>
        <input
          value={newGoalTypeName}
          onChange={(event) => setNewGoalTypeName(event.target.value)}
        />
        <button className={"mt-5 btn_primary"} onClick={addGoalTypeHandler}>
          Ajouter un type d'ojectif +
        </button>
      </div>
    </>
  )
}
