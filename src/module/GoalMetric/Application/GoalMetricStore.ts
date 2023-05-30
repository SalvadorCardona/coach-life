import GoalMetricInterface from "@/module/GoalMetric/Domain/GoalMetricInterface.ts"
import { create } from "zustand"

import addTo from "@/module/Shared/Application/List/addTo.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"

import {
  persistGoalMetric,
  restoreGoalMetric,
} from "@/module/GoalMetric/Infratructure/GoalMetricRepository.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"

export interface GoalMetricState {
  goalMetrics: GoalMetricInterface[]
  updateGoalMetric: (goalMetric: GoalMetricInterface) => void
}

export const useGoalMetricStore = create<GoalMetricState>((set, getState) => ({
  goalMetrics: restoreGoalMetric(),
  updateGoalMetric: (goalMetric: GoalMetricInterface) => {
    const goalMetrics = getState().goalMetrics

    if (!getItemById(goalMetric.id, goalMetrics)) {
      addTo(goalMetric, goalMetrics)
    }

    updateById(goalMetric, goalMetrics)
    set({ goalMetrics })
    persistGoalMetric(goalMetrics)
  },
}))
