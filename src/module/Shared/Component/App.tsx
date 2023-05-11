import "./App.css"
import { GoalTypeListComponent } from "@/module/GoalType/Component/GoalTypeListComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { DayComponent } from "@/module/Day/Component/DayComponent.tsx"
import { CalendarComponent } from "@/module/Calendar/Component/CalendarComponent.tsx"
import { useCalendarStore } from "@/module/Calendar/Application/CalendarStore.ts"

function App() {
  const goalTypesStore = useGoalTypeStore()
  const dayStore = useDayStore()
  const calendarStore = useCalendarStore()

  return (
    <>
      <div>
        <div>{calendarStore.currentDate}</div>
        <CalendarComponent
          currentDate={calendarStore.currentDate}
          onClick={calendarStore.update}
        ></CalendarComponent>
      </div>
      <div className="App grid grid-cols-2 gap-4">
        <div>
          <DayComponent
            goalTypes={goalTypesStore.goalTypes}
            day={dayStore.getDayByDate(calendarStore.currentDate)}
            onUpdateDay={dayStore.updateDay}
          ></DayComponent>
        </div>
        <div>
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
