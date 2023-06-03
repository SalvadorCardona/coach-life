import { useTodoStore } from "@/module/Todo/Application/TodoStore.ts"
import createTodo from "@/module/Todo/Domain/createTodo.ts"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { Card, CardBody, Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { IoIosAdd } from "react-icons/io"
import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"
import getTodoListByState from "@/module/Todo/Domain/getTodoListByState.ts"
import { TodoFormComponent } from "@/module/Todo/Component/TodoFormComponent.tsx"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"

export function TodoComponent() {
  const todoStore = useTodoStore()

  const addNewTodo = () => {
    todoStore.updateItem(createTodo())
  }

  return (
    <>
      <ButtonComponent
        mt={2}
        size="xs"
        leftIcon={<Icon as={IoIosAdd} color={"white"} />}
        onClick={addNewTodo}
      >
        Add a todo
      </ButtonComponent>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6} mt={5}>
        {Object.keys(TodoStateEnum).map((currentState) => {
          return (
            <GridItem key={currentState}>
              <Text>{currentState}</Text>
              <Card minH={500}>
                <CardBody>
                  {getTodoListByState(currentState as TodoStateEnum, todoStore.items)
                    .reverse()
                    .map((item) => {
                      return (
                        <div key={item.id}>
                          <TodoFormComponent
                            todo={item}
                            onUpdate={todoStore.updateItem}
                          ></TodoFormComponent>
                          <SeparatorComponent mt={2}></SeparatorComponent>
                        </div>
                      )
                    })}
                </CardBody>
              </Card>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
