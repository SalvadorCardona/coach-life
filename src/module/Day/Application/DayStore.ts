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
import { createDayRead, DayReadInterface } from "@/module/Day/Domain/DayRead.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import { restoreObjectType } from "@/module/Objective/Infratructure/ObjectiveRepository.ts"
import { restoreMetricTypes } from "@/module/MetricType/Domain/MetricTypeRepository.ts"

export interface DayState {
  items: DayInterface[]
  updateAll: (days: DayInterface[]) => void
  updateDay: (day: DayInterface) => void
  getDayByDate: (date: DateString) => DayInterface | undefined
  getDayReadById: (dayId: DayInterface["id"]) => DayReadInterface
}

export const useDayStore = create<DayState>((set, getState) => ({
  items: restoreDays(),
  updateAll: (days: DayInterface[]) => {
    set({ items: days })
    persistDays(days)
  },
  updateDay: (day: DayInterface) => {
    const days = getState().items

    if (!getDayByDate(day.createdDate, days)) {
      addTo(day, days)
    }

    updateById(day, days)
    set({ items: days })

    persistDays(days)
  },
  getDayByDate: (date: DateString) => {
    return getDayByDate(date, getState().items)
  },
  getDayReadById: (dayId) => {
    const day = getItemById(dayId, getState().items) as DayInterface

    return createDayRead({
      day: day,
      objectives: restoreObjectType(),
      metricTypes: restoreMetricTypes(),
    })
  },
}))
