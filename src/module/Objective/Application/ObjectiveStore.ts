import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import { create } from "zustand"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import {
  persistObjectType,
  restoreObjectType,
} from "@/module/Objective/Infratructure/ObjectiveRepository.ts"
import removeById from "@/module/Shared/Application/Id/removeById.ts"

export interface ObjectiveState {
  items: ObjectiveInterface[]
  updateAll: (objectives: ObjectiveInterface[]) => void
  updateObjective: (objective: ObjectiveInterface) => void
  getObjectiveById: (
    id: ObjectiveInterface["id"]
  ) => ObjectiveInterface | undefined
  removeObjectiveById: (id: ObjectiveInterface["id"]) => void
}

export const useObjectiveStore = create<ObjectiveState>((set, getState) => ({
  items: restoreObjectType(),
  updateAll: (objectives: ObjectiveInterface[]) => {
    set({ items: objectives })
  },
  updateObjective: (objective: ObjectiveInterface) => {
    const objectives = getState().items
    if (!getItemById(objective.id, objectives)) {
      objectives.push(objective)
    }

    updateById(objective, objectives)
    set({ items: objectives })
    persistObjectType(objectives)
  },
  getObjectiveById: (id: ObjectiveInterface["id"]) => {
    return getItemById(id, getState().items)
  },
  removeObjectiveById: (id: ObjectiveInterface["id"]) => {
    const objectives = getState().items
    removeById(id, objectives)
    set({ items: objectives })
    persistObjectType(objectives)
  },
}))
