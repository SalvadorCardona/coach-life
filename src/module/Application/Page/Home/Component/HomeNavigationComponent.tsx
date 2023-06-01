import { Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { getMenuRoutes } from "@/module/Application/routes.tsx"
import { Link as RouterLink } from "react-router-dom"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"

export function HomeNavigationComponent() {
  const routes = getMenuRoutes().filter((route) => route.path !== "/")
  return (
    <>
      <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={6}>
        {routes.map((route) => {
          return (
            <GridItem key={route.name}>
              <WrapperComponent>
                <RouterLink to={route.path as string}>
                  <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "cyan.400",
                      color: "white",
                    }}
                  >
                    {route.icon && (
                      <Icon
                        mr={4}
                        fontSize="32"
                        _groupHover={{
                          color: "white",
                        }}
                        as={route.icon}
                      />
                    )}
                    <Text>{route.title}</Text>
                  </Flex>
                  <SeparatorComponent></SeparatorComponent>
                  <Text color={"gray"}>{route.subTitle}</Text>
                </RouterLink>
              </WrapperComponent>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
