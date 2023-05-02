import "./App.css"
import { DayListComponent } from "@/module/Day/Component/DayListComponent.tsx"
import { GoalTypeListComponent } from "@/module/GoalType/Component/GoalTypeListComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"

function App() {
  const goalTypesStore = useGoalTypeStore()

  return (
    <>
      <div className="App grid grid-cols-2 gap-4">
        <div className={""}>
          <DayListComponent></DayListComponent>
        </div>
        <div className={""}>
          <GoalTypeListComponent
            updateGoalType={goalTypesStore.update}
            goalTypeList={goalTypesStore.goalTypes}
          ></GoalTypeListComponent>
        </div>
      </div>
    </>
  )
}

export default App
