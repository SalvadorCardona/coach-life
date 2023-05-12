import "./App.css"
import { GoalTypeListComponent } from "@/module/GoalType/Component/GoalTypeListComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { DayComponent } from "@/module/Day/Component/DayComponent.tsx"
import { CalendarComponent } from "@/module/Calendar/Component/CalendarComponent.tsx"
import { useCalendarStore } from "@/module/Calendar/Application/CalendarStore.ts"
import { NavigationComponent } from "@/module/Application/Component/Navigation/NavigationComponent.tsx"

function App() {
  const goalTypesStore = useGoalTypeStore()
  const dayStore = useDayStore()
  const calendarStore = useCalendarStore()

  return (
    <>
      <div className={"flex"}>
        <NavigationComponent />
        <div className={"px-16 p-4"}>
          <CalendarComponent
            currentDate={calendarStore.currentDate}
            onClick={calendarStore.update}
          />
          <div className="App grid grid-cols-2 gap-4 mt-5">
            <div>
              <DayComponent
                goalTypes={goalTypesStore.goalTypes}
                day={dayStore.getDayByDate(calendarStore.currentDate)}
                onUpdateDay={dayStore.updateDay}
              />
            </div>
            <div>
              <GoalTypeListComponent
                removeGoalType={goalTypesStore.removeGoalType}
                updateGoalType={goalTypesStore.updateGoalType}
                goalTypes={goalTypesStore.goalTypes}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
