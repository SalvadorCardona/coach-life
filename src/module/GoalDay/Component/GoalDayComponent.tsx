import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { useState } from "react"

export interface GoalDayComponentPropsInterface {
  goalDay: GoalDayInterface
  onUpdate: (goalDay: GoalDayInterface) => void
}

export function GoalDayComponent(props: GoalDayComponentPropsInterface) {
  const [goalDay, setGoalDay] = useState<GoalDayInterface>(props.goalDay)
  const increment = () => {
    goalDay.value = goalDay.value + 0.5
    props.onUpdate(goalDay)
    setGoalDay(goalDay)
  }

  const decrement = () => {
    goalDay.value--
    props.onUpdate(goalDay)
    setGoalDay(goalDay)
  }

  return (
    <div className={"wrapper"}>
      <h4 className={"text-xl capitalize"}>{props.goalDay.goalType?.name} :</h4>
      <p className={"text-6xl my-5 text-primary"}>{goalDay.value}</p>
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
