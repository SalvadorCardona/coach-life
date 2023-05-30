import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { useCalendarStore } from "@/module/Calendar/Application/CalendarStore.ts"
import { CalendarComponent } from "@/module/Calendar/Component/CalendarComponent.tsx"
import { DayTableComponent } from "@/module/Application/Page/DayPage/Component/DayTableComponent.tsx"
import { Box } from "@chakra-ui/react"

export function DayPage() {
  const goalTypesStore = useGoalTypeStore()
  const dayStore = useDayStore()
  const calendarStore = useCalendarStore()

  return (
    <>
      <CalendarComponent
        currentDate={calendarStore.currentDate}
        onClick={calendarStore.update}
      />
      <Box mt={5}>
        <DayTableComponent
          goalTypes={goalTypesStore.goalTypes}
          day={dayStore.getDayByDate(calendarStore.currentDate)}
          onUpdateDay={dayStore.updateDay}
        />
      </Box>
    </>
  )
}