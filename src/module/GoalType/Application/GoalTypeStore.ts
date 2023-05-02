import { create } from "zustand"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import {
  getGoalTypes,
  persistGoalTypes,
} from "@/module/GoalType/Domain/GoalTypeRepository.ts"

interface GoalTypeState {
  goalTypes: GoalTypeInterface[]
  update: (goalTypes: GoalTypeInterface[]) => void
}

export const useGoalTypeStore = create<GoalTypeState>((set) => ({
  goalTypes: getGoalTypes(),
  update: (goalTypes: GoalTypeInterface[]) => {
    set({ goalTypes })
    persistGoalTypes(goalTypes)
  },
}))
