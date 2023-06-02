import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"
import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"
import getListBy from "@/module/Shared/Application/Id/getListBy.ts"

export default function getTodoListByState(
  state: TodoStateEnum,
  todos: TodoInterface[]
): TodoInterface[] {
  return getListBy("state", state, todos)
}
