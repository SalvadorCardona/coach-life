import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalDayComponent } from "@/module/GoalDay/Component/GoalDayComponent.tsx"
import createGoalDayList from "@/module/GoalDay/Domain/createGoalDayList.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"

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
      <TitleComponent>Your data goal</TitleComponent>
      <div className={"grid grid-cols-3 gap-4"}>
        {createGoalDayList(props.day.goalDays, props.goalTypes).map((goalDay) => (
          <div key={goalDay.id}>
            <GoalDayComponent onUpdate={updateHandler} goalDay={goalDay} />
          </div>
        ))}
      </div>
    </>
  )
}
