import { create } from "zustand"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import {
  restoreDays,
  persistDays,
} from "@/module/Day/Infratructure/DayRepository.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

import addTo from "@/module/Shared/Application/List/addTo.ts"
import { getDayByDate } from "@/module/Day/Domain/getDayByDate.ts"

export interface DayState {
  days: DayInterface[]
  updateAll: (days: DayInterface[]) => void
  updateDay: (day: DayInterface) => void
  getDayByDate: (date: DateString) => DayInterface | undefined
}

export const useDayStore = create<DayState>((set, getState) => ({
  days: restoreDays(),
  updateAll: (days: DayInterface[]) => {
    set({ days })
    persistDays(days)
  },
  updateDay: (day: DayInterface) => {
    const days = getState().days

    if (!getDayByDate(day.createdDate, days)) {
      addTo(day, days)
    }

    updateById(day, days)
    set({ days })
    persistDays(days)
  },
  getDayByDate: (date: DateString) => {
    return getDayByDate(date, getState().days)
  },
}))
