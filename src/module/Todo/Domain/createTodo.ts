import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"
import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"
import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"

export default function createTodo(
  args: Partial<TodoInterface> = {}
): TodoInterface {
  return {
    ...{
      id: createUniqId(),
      state: TodoStateEnum.TODO,
      title: "",
      description: "",
    },
    ...args,
  }
}
