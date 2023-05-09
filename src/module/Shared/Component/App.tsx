import "./App.css"
import { GoalTypeListComponent } from "@/module/GoalType/Component/GoalTypeListComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { getDayByDate } from "@/module/Day/Domain/DayManager.ts"
import { DayComponent } from "@/module/Day/Component/DayComponent.tsx"
import { CalendarComponent } from "@/module/Calendar/Component/CalendarComponent.tsx"
import { useCalendarStore } from "@/module/Calendar/Application/CalendarStore.ts"

function App() {
  const goalTypesStore = useGoalTypeStore()
  const dayStore = useDayStore()
  const calendarStore = useCalendarStore()

  const onChangeDay = (date: Date) => {
    calendarStore.update(getDayByDate(date, dayStore.days))
  }

  return (
    <>
      <div>
        <div>{calendarStore.currentDay.createdDate.toDateString()}</div>
        <CalendarComponent
          currentDay={calendarStore.currentDay}
          onClick={onChangeDay}
        ></CalendarComponent>
      </div>
      <div className="App grid grid-cols-2 gap-4">
        <div className={""}>
          <DayComponent
            goalTypes={goalTypesStore.goalTypes}
            day={getDayByDate(calendarStore.currentDay.createdDate, dayStore.days)}
          ></DayComponent>
        </div>
        <div className={""}>
          <GoalTypeListComponent
            updateGoalType={goalTypesStore.update}
            goalTypes={goalTypesStore.goalTypes}
          ></GoalTypeListComponent>
        </div>
      </div>
    </>
  )
}

export default App
