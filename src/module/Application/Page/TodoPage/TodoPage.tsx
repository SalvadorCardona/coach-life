import { Text, Card, CardBody, Grid, GridItem, Icon } from "@chakra-ui/react"
import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"
import { useTodoStore } from "@/module/Todo/Application/TodoStore.ts"
import getTodoListByState from "@/module/Todo/Domain/getTodoListByState.ts"
import { TodoFormComponent } from "@/module/Todo/Component/TodoFormComponent.tsx"
import { IoIosAdd } from "react-icons/io"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import createTodo from "@/module/Todo/Domain/createTodo.ts"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"

export function TodoPage() {
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
                  {getTodoListByState(
                    currentState as TodoStateEnum,
                    todoStore.items
                  ).map((item) => {
                    return (
                      <>
                        <TodoFormComponent
                          key={item.id}
                          todo={item}
                          onUpdate={todoStore.updateItem}
                        ></TodoFormComponent>
                        <SeparatorComponent mt={2}></SeparatorComponent>
                      </>
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
