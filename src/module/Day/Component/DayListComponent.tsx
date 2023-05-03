import DayInterface from "@/module/Day/Domain/DayInterface.ts"

export interface DayListComponentPropsInterface {
  days: DayInterface[]
}

export function DayListComponent(props: DayListComponentPropsInterface) {
  return (
    <>
      <div>Day List Component</div>
      <div>
        {props.days.map((day: DayInterface) => {
          return <div key={day.id}>{day.createdDate.toISOString()}</div>
        })}
      </div>
    </>
  )
}
