import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { GoalDayComponent } from "@/module/GoalDay/Component/GoalDayComponent.tsx"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import createGoalDayList from "@/module/GoalDay/Domain/createGoalDayList.ts"

export interface GoalDayListComponentPropsInterface {
  goalDays: GoalDayInterface[]
  goalTypes: GoalTypeInterface[]
  day: DayInterface
}

export function GoalDayListComponent(props: GoalDayListComponentPropsInterface) {
  const goalDays = createGoalDayList(props.goalDays, props.goalTypes, props.day)

  return (
    <>
      <div>Hello GoalDayListComponent</div>
      <div>
        {goalDays.map((goalDay) => (
          <GoalDayComponent goalDay={goalDay} key={goalDay.id}></GoalDayComponent>
        ))}
      </div>
    </>
  )
}
