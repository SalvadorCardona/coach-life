import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { create } from "zustand"
import getById from "@/module/Shared/Application/Id/getById.ts"
import {
  persistObjectType,
  restoreObjectType,
} from "@/module/GoalObjective/Infratructure/GoalObjectiveRepository.ts"

interface GoalObjectiveState {
  goalObjectives: GoalObjectiveInterface[]
  updateAll: (goalObjectives: GoalObjectiveInterface[]) => void
  updateGoalObjective: (goalObjective: GoalObjectiveInterface) => void
  getGoalObjectiveById: (
    id: GoalObjectiveInterface["id"]
  ) => GoalObjectiveInterface | undefined
}

export const useGoalObjectiveStore = create<GoalObjectiveState>((set, getState) => ({
  goalObjectives: restoreObjectType(),
  updateAll: (goalObjectives: GoalObjectiveInterface[]) => {
    set({ goalObjectives })
  },
  updateGoalObjective: (goalObjective: GoalObjectiveInterface) => {
    const goalObjectives = getState().goalObjectives

    if (getById(goalObjective.id, goalObjectives) === null) {
      goalObjectives.push(goalObjective)
    }

    updateById(goalObjective, goalObjectives)
    set({ goalObjectives })
    persistObjectType(goalObjectives)
  },
  getGoalObjectiveById: (id: GoalObjectiveInterface["id"]) => {
    return getById(id, getState().goalObjectives)
  },
}))
