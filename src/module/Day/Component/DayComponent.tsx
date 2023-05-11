import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalDayComponent } from "@/module/GoalDay/Component/GoalDayComponent.tsx"
import createGoalDayList from "@/module/GoalDay/Domain/createGoalDayList.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"

export interface DayComponentPropsInterface {
  day: DayInterface
  goalTypes: GoalTypeInterface[]
  onUpdateDay: (day: DayInterface) => void
}

export function DayComponent(props: DayComponentPropsInterface) {
  const updateHandler = (goalDay: GoalDayInterface) => {
    updateById(goalDay, props.day.goalDays)
    props.onUpdateDay(props.day)
  }

  return (
    <>
      <div>DayComponentDay</div>
      <div>{props.day.createdDate}</div>
      <div>
        {createGoalDayList(props.day.goalDays, props.goalTypes).map((goalDay) => (
          <GoalDayComponent
            onUpdate={updateHandler}
            goalDay={goalDay}
            key={goalDay.id}
          ></GoalDayComponent>
        ))}
      </div>
    </>
  )
}
