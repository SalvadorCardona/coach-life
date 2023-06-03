import { create } from "zustand"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import {
  getMetricTypes,
  persistMetricTypes,
} from "@/module/MetricType/Domain/MetricTypeRepository.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import removeById from "@/module/Shared/Application/Id/removeById.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { IdAbleInterface } from "@/module/Shared/Application/Id/IdAbleInterface.ts"

export interface MetricTypeState {
  items: MetricTypeInterface[]
  updateAll: (metricTypes: MetricTypeInterface[]) => void
  updateMetricType: (metricType: MetricTypeInterface) => void
  removeMetricType: (id: IdAbleInterface) => void
}

export const useMetricTypeStore = create<MetricTypeState>((set, getState) => ({
  items: getMetricTypes(),
  updateAll: (metricTypes: MetricTypeInterface[]) => {
    set({ items: metricTypes })
    persistMetricTypes(metricTypes)
  },
  updateMetricType: (metricType: MetricTypeInterface) => {
    const metricTypes = getState().items
    const metricTypeToUpdate = getItemById(metricType.id, metricTypes)

    metricTypeToUpdate
      ? updateById(metricType, metricTypes)
      : metricTypes.push(metricType)

    set({ items: metricTypes })
    persistMetricTypes(metricTypes)
  },
  removeMetricType: (idAble: IdAbleInterface) => {
    const metricTypes = getState().items
    removeById(idAble.id, metricTypes)

    set({ items: metricTypes })
    persistMetricTypes(metricTypes)
  },
}))
