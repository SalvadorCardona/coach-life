import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { useState } from "react"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"

export interface GoalDayComponentPropsInterface {
  goalDay: GoalDayInterface
  onUpdate: (goalDay: GoalDayInterface) => void
}

export function GoalDayComponent(props: GoalDayComponentPropsInterface) {
  const [goalDay] = useState<GoalDayInterface>(props.goalDay)
  const increment = () => {
    goalDay.value++
    props.onUpdate(goalDay)
  }

  const decrement = () => {
    goalDay.value--
    props.onUpdate(goalDay)
  }

  return (
    <div className={"wrapper"}>
      <h4 className={"text-1xl capitalize"}>{props.goalDay.goalType?.name} :</h4>
      <div className={"flex justify-start items-center"}>
        <span className={"text-2xl my-2 mr-5 text-primary"}>{goalDay.value}</span>
        <span className={"text-light"}>
          {goalDay.goalType?.metric === GoalTypeMetricEnum.QUANTITY
            ? "Qty"
            : "Hours"}
        </span>
      </div>

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
