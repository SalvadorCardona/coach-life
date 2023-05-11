import { create } from "zustand"

import {
  restoreCalendar,
  persistCalendar,
} from "@/module/Calendar/Infratructure/CalendarRepository.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

interface CalendarState {
  currentDate: DateString
  update: (currentDate: DateString) => void
}

export const useCalendarStore = create<CalendarState>((set) => ({
  currentDate: restoreCalendar(),
  update: (currentDate: DateString) => {
    set({ currentDate })
    persistCalendar(currentDate)
  },
}))
