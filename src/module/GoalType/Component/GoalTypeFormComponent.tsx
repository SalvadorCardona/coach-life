import { FormEvent, useState } from "react"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { createGoalType } from "@/module/GoalType/Domain/createGoalType.ts"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"

export interface GoalTypeFormComponentPropsInterface {
  updateGoalType: (goalType: GoalTypeInterface) => void
}

export function GoalTypeFormComponent(props: GoalTypeFormComponentPropsInterface) {
  const [newGoalType, setGoalType] = useState<GoalTypeInterface>(createGoalType())

  const nameHandler = (value: string) => {
    setGoalType({ ...newGoalType, name: value })
  }

  const defaultValueHandler = (value: string) => {
    setGoalType({ ...newGoalType, defaultValue: Number(value) })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.updateGoalType(newGoalType)
    setGoalType(createGoalType())
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={"form-group wrapper"}>
        <SubTitleComponent>Add a new goal type</SubTitleComponent>
        <div className={"form-group"}>
          <label>Name :</label>
          <input
            type={"text"}
            value={newGoalType.name}
            onChange={(event) => nameHandler(event.target.value)}
            placeholder={"Your name..."}
          />
        </div>
        <div className="form-group">
          <label>Default Value :</label>
          <input
            type={"number"}
            value={newGoalType.defaultValue}
            onChange={(event) => defaultValueHandler(event.target.value)}
            placeholder={"Your defaults value..."}
          />
        </div>
        <div className="form-group">
          <label>Metrics :</label>
          <select>
            <option value={GoalTypeMetricEnum.QUANTITY}>Quantity</option>
            <option value={GoalTypeMetricEnum.HOUR}>Time in hour</option>
          </select>
        </div>
        <input type={"submit"} className={"mt-5 btn_primary"} value={"Add"} />
      </form>
    </>
  )
}
