import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import { create } from "zustand"

import addTo from "@/module/Shared/Application/List/addTo.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"

import {
  persistMetric,
  restoreMetric,
} from "@/module/Metric/Infratructure/MetricRepository.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"

export interface MetricState {
  items: MetricInterface[]
  updateMetric: (metric: MetricInterface) => void
  updateAll: (items: MetricInterface[]) => void
}

export const useMetricStore = create<MetricState>((set, getState) => ({
  items: restoreMetric(),
  updateMetric: (metric: MetricInterface) => {
    const metrics = getState().items

    if (!getItemById(metric.id, metrics)) {
      addTo(metric, metrics)
    }

    updateById(metric, metrics)
    set({ items: metrics })
    persistMetric(metrics)
  },
  updateAll: (items: MetricInterface[]) => {
    set({ items })
    persistMetric(items)
  },
}))
