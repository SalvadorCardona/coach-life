import { create } from "zustand"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import {
  getCalendar,
  persistCalendar,
} from "@/module/Calendar/Domain/CalendarRepository.ts"

interface CalendarState {
  currentDay: DayInterface
  update: (currentDay: DayInterface) => void
}

export const useCalendarStore = create<CalendarState>((set) => ({
  currentDay: getCalendar(),
  update: (currentDay: DayInterface) => {
    set({ currentDay })
    persistCalendar(currentDay)
  },
}))
