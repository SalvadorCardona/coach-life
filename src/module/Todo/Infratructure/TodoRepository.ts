import { restore, update } from "@/module/Shared/Infratructure/repository.ts"
import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"

const name = "todo-type"

export function persistTodo(items: TodoInterface[]): void {
  update(name, items)
}

export function restoreTodo(): TodoInterface[] {
  return restore<TodoInterface[]>(name) ?? []
}
