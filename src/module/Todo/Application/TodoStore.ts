import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"
import { create } from "zustand"
import addTo from "@/module/Shared/Application/List/addTo.ts"
import updateById from "@/module/Shared/Application/Id/updateById.ts"
import {
  persistTodo,
  restoreTodo,
} from "@/module/Todo/Infratructure/TodoRepository.ts"
import getItemById from "@/module/Shared/Application/Id/getItemById.ts"

interface TodoStore {
  items: TodoInterface[]
  updateItem: (todo: TodoInterface) => void
}

export const useTodoStore = create<TodoStore>((set, getState) => ({
  items: restoreTodo(),

  updateItem: (todo: TodoInterface) => {
    const items = getState().items

    if (!getItemById(todo.id, items)) {
      addTo(todo, items)
    }

    updateById(todo, items)
    set({ items: items })

    persistTodo(items)
  },
}))
