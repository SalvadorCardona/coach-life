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
  metricTypes: MetricTypeInterface[]
  updateAll: (metricTypes: MetricTypeInterface[]) => void
  updateMetricType: (metricType: MetricTypeInterface) => void
  removeMetricType: (id: IdAbleInterface) => void
}

export const useMetricTypeStore = create<MetricTypeState>((set, getState) => ({
  metricTypes: getMetricTypes(),
  updateAll: (metricTypes: MetricTypeInterface[]) => {
    set({ metricTypes })
    persistMetricTypes(metricTypes)
  },
  updateMetricType: (metricType: MetricTypeInterface) => {
    const metricTypes = getState().metricTypes
    const metricTypeToUpdate = getItemById(metricType.id, metricTypes)
    metricTypeToUpdate
      ? updateById(metricType, metricTypes)
      : metricTypes.push(metricType)

    set({ metricTypes })
    persistMetricTypes(metricTypes)
  },
  removeMetricType: (idAble: IdAbleInterface) => {
    const metricTypes = getState().metricTypes
    removeById(idAble.id, metricTypes)

    set({ metricTypes })
    persistMetricTypes(metricTypes)
  },
}))
