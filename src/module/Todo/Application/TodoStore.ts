import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"
import { create } from "zustand"
import addTo from "@/module/Shared/Application/List/addTo.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import {
  persistTodo,
  restoreTodo,
} from "@/module/Todo/Infratructure/TodoRepository.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"
import removeById from "@/module/Shared/Application/Id/removeById.ts"

export interface TodoState {
  items: TodoInterface[]
  updateItem: (todo: TodoInterface) => void
  updateAll: (items: TodoInterface[]) => void
  removeItem: (item: TodoInterface["id"]) => void
}

export const useTodoStore = create<TodoState>((set, getState) => ({
  items: restoreTodo(),
  removeItem: (id: TodoInterface["id"]) => {
    const items = getState().items
    removeById(id, items)
    set({ items: items })
    persistTodo(items)
  },
  updateItem: (todo: TodoInterface) => {
    const items = getState().items

    if (!getItemById(todo.id, items)) {
      addTo(todo, items)
    }

    updateById(todo, items)
    set({ items: items })

    persistTodo(items)
  },
  updateAll: (items: TodoInterface[]) => {
    set({ items })
    persistTodo(items)
  },
}))
