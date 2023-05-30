import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { create } from "zustand"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import {
  persistObjectType,
  restoreObjectType,
} from "@/module/GoalObjective/Infratructure/GoalObjectiveRepository.ts"
import removeById from "@/module/Shared/Application/Id/removeById.ts"

export interface GoalObjectiveState {
  goalObjectives: GoalObjectiveInterface[]
  updateAll: (goalObjectives: GoalObjectiveInterface[]) => void
  updateGoalObjective: (goalObjective: GoalObjectiveInterface) => void
  getGoalObjectiveById: (
    id: GoalObjectiveInterface["id"]
  ) => GoalObjectiveInterface | undefined
  removeGoalObjectiveById: (id: GoalObjectiveInterface["id"]) => void
}

export const useGoalObjectiveStore = create<GoalObjectiveState>((set, getState) => ({
  goalObjectives: restoreObjectType(),
  updateAll: (goalObjectives: GoalObjectiveInterface[]) => {
    set({ goalObjectives })
  },
  updateGoalObjective: (goalObjective: GoalObjectiveInterface) => {
    const goalObjectives = getState().goalObjectives
    if (!getItemById(goalObjective.id, goalObjectives)) {
      goalObjectives.push(goalObjective)
    }

    updateById(goalObjective, goalObjectives)
    set({ goalObjectives })
    persistObjectType(goalObjectives)
  },
  getGoalObjectiveById: (id: GoalObjectiveInterface["id"]) => {
    return getItemById(id, getState().goalObjectives)
  },
  removeGoalObjectiveById: (id: GoalObjectiveInterface["id"]) => {
    const goalObjectives = getState().goalObjectives
    removeById(id, goalObjectives)
    set({ goalObjectives })
    persistObjectType(goalObjectives)
  },
}))
