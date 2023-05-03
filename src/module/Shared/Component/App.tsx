import "./App.css"
import { GoalTypeListComponent } from "@/module/GoalType/Component/GoalTypeListComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { getDayByDate } from "@/module/Day/Domain/DayManager.ts"
import createDay from "@/module/Day/Domain/createDay.ts"
import { DayComponent } from "@/module/Day/Component/DayComponent.tsx"

function App() {
  const goalTypesStore = useGoalTypeStore()
  const dayStore = useDayStore()

  dayStore.currentDay = getDayByDate(new Date(), dayStore.days) ?? createDay()

  return (
    <>
      <div className="App grid grid-cols-2 gap-4">
        <div className={""}>
          <DayComponent
            goalTypes={goalTypesStore.goalTypes}
            day={dayStore.currentDay}
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
