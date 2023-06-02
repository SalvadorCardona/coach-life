import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"

export default interface TodoInterface {
  id: string
  title: string
  description: string
  state: TodoStateEnum
}
