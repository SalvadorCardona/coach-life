import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { create } from "zustand"
import getById from "@/module/Shared/Application/Id/getById.ts"
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
    console.log(goalObjective)
    if (!getById(goalObjective.id, goalObjectives)) {
      goalObjectives.push(goalObjective)
    }

    updateById(goalObjective, goalObjectives)
    set({ goalObjectives })
    persistObjectType(goalObjectives)
  },
  getGoalObjectiveById: (id: GoalObjectiveInterface["id"]) => {
    return getById(id, getState().goalObjectives)
  },
  removeGoalObjectiveById: (id: GoalObjectiveInterface["id"]) => {
    const goalObjectives = getState().goalObjectives
    removeById(id, goalObjectives)
    set({ goalObjectives })
    persistObjectType(goalObjectives)
  },
}))
