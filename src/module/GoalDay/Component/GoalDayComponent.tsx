import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { useState } from "react"

export interface GoalDayComponentPropsInterface {
  goalDay: GoalDayInterface
}

export function GoalDayComponent(props: GoalDayComponentPropsInterface) {
  const [value, setValue] = useState<number>(props.goalDay.value)
  const increment = () => {
    setValue(value + 1)
  }

  const decrement = () => {
    setValue(value - 1)
  }

  return (
    <div className={"wrapper"}>
      <h4 className={"text-xl capitalize"}>{props.goalDay.goalType?.name} :</h4>
      <p className={"text-6xl my-5 text-primary"}>{value}</p>
      <div className={"flex flex-row justify-between"}>
        <button className={"btn_primary"} onClick={decrement}>
          -
        </button>
        <button className={"btn_primary"} onClick={increment}>
          +
        </button>
      </div>
    </div>
  )
}
