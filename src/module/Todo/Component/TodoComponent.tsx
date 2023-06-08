import { useTodoStore } from "@/module/Todo/Application/TodoStore.ts"
import createTodo from "@/module/Todo/Domain/createTodo.ts"
import { Card, CardBody, Grid, GridItem, Text } from "@chakra-ui/react"

import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"
import getTodoListByState from "@/module/Todo/Domain/getTodoListByState.ts"
import { TodoFormComponent } from "@/module/Todo/Component/TodoFormComponent.tsx"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"
import { AddButtonComponent } from "@/module/Shared/Component/Form/AddButtonComponent.tsx"

export function TodoComponent() {
  const todoStore = useTodoStore()
  return (
    <>
      <AddButtonComponent onClick={() => todoStore.updateItem(createTodo())}>
        Add a todo
      </AddButtonComponent>
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
                            removeItem={todoStore.removeItem}
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
