import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import { FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"

import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"
import { useRef } from "react"
import formDataToObject from "@/module/Shared/Application/Form/formDataToObject.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"

export interface TodoFormComponentPropsInterface {
  todo: TodoInterface
  onUpdate: (todo: TodoInterface) => void
}

export function TodoFormComponent(props: TodoFormComponentPropsInterface) {
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    if (!ref.current) return

    const formData = {
      ...props.todo,
      ...formDataToObject<ObjectiveInterface>(ref.current),
    }
    props.onUpdate(formData)
  }

  return (
    <WrapperComponent>
      <form onChange={handleSubmit} ref={ref}>
        <FormControl mt={1}>
          <Input
            required={true}
            type="text"
            defaultValue={props.todo.title}
            placeholder={"Title..."}
            name={"title"}
          />
        </FormControl>
        <FormControl mt={1}>
          <Textarea
            required={true}
            defaultValue={props.todo.description}
            placeholder={"Description..."}
            name={"description"}
          />
        </FormControl>
        <FormControl mt={1}>
          <Select name={"state"} value={props.todo.state}>
            {Object.values(TodoStateEnum).map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            })}
          </Select>
        </FormControl>
      </form>
    </WrapperComponent>
  )
}
