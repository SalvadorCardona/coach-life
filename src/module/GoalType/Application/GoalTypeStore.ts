import { create } from "zustand"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import {
  getGoalTypes,
  persistGoalTypes,
} from "@/module/GoalType/Domain/GoalTypeRepository.ts"
import getById from "@/module/Shared/Application/Id/getById.ts"
import removeById from "@/module/Shared/Application/Id/removeById.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { IdAbleInterface } from "@/module/Shared/Application/Id/IdAbleInterface.ts"

interface GoalTypeState {
  goalTypes: GoalTypeInterface[]
  updateAll: (goalTypes: GoalTypeInterface[]) => void
  updateGoalType: (goalType: GoalTypeInterface) => void
  removeGoalType: (id: IdAbleInterface) => void
}

export const useGoalTypeStore = create<GoalTypeState>((set, getState) => ({
  goalTypes: getGoalTypes(),
  updateAll: (goalTypes: GoalTypeInterface[]) => {
    set({ goalTypes })
    persistGoalTypes(goalTypes)
  },
  updateGoalType: (goalType: GoalTypeInterface) => {
    const goalTypes = getState().goalTypes
    const goalTypeToUpdate = getById(goalType.id, goalTypes)
    goalTypeToUpdate ? updateById(goalType, goalTypes) : goalTypes.push(goalType)

    set({ goalTypes })
    persistGoalTypes(goalTypes)
  },
  removeGoalType: (idAble: IdAbleInterface) => {
    const goalTypes = getState().goalTypes
    removeById(idAble.id, goalTypes)

    set({ goalTypes })
  },
}))
