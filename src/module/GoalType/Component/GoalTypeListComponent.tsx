import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalTypeComponent } from "@/module/GoalType/Component/GoalTypeComponent.tsx"
import { createGoalType } from "@/module/GoalType/Domain/createGoalType.ts"
import { removeGoalType } from "@/module/GoalType/Domain/removeGoalType.ts"
import { useState } from "react"
import { addGoalType } from "@/module/GoalType/Domain/addGoalType.ts"

export interface GoalTypeListComponentPropsInterface {
  goalTypes: GoalTypeInterface[]
  updateGoalType: (goalTypes: GoalTypeInterface[]) => void
}

export function GoalTypeListComponent(props: GoalTypeListComponentPropsInterface) {
  const [newGoalTypeName, setNewGoalTypeName] = useState<string>("")
  const addGoalTypeHandler = () => {
    const newGoalType = createGoalType()
    newGoalType.name = newGoalTypeName
    addGoalType(newGoalType, props.goalTypes)
    props.updateGoalType(props.goalTypes)
  }

  const removeGoalTypeHandler = (goalType: GoalTypeInterface) => {
    removeGoalType(goalType, props.goalTypes)
    props.updateGoalType(props.goalTypes)
  }

  return (
    <>
      <div>Hello GoalTypeListComponent</div>
      <div>
        {props.goalTypes.map((goalType) => (
          <GoalTypeComponent
            removeHandler={removeGoalTypeHandler}
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
