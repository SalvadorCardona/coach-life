import { create } from "zustand"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { getDays, persistDays } from "@/module/Day/Domain/DayRepository.ts"

interface DayState {
  days: DayInterface[]
  currentDay: DayInterface | null
  update: (days: DayInterface[]) => void
}

export const useDayStore = create<DayState>((set) => ({
  currentDay: null,
  days: getDays(),
  update: (days: DayInterface[]) => {
    set({ days })
    persistDays(days)
  },
}))
