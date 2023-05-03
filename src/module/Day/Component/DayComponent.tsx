import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { GoalDayListComponent } from "@/module/GoalDay/Component/GoalDayListComponent.tsx"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface DayComponentPropsInterface {
  day: DayInterface
  goalTypes: GoalTypeInterface[]
}

export function DayComponent(props: DayComponentPropsInterface) {
  return (
    <>
      <div>DayComponentDay</div>
      <div>
        <GoalDayListComponent
          day={props.day}
          goalDays={props.day.goalDays}
          goalTypes={props.goalTypes}
        />
      </div>
    </>
  )
}
