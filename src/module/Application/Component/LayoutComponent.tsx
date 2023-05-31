import { Box, Flex, Heading } from "@chakra-ui/react"
import { NavigationComponent } from "@/module/Shared/Component/Navigation/NavigationComponent.tsx"
import { Outlet, useLocation } from "react-router-dom"
import { getRouteByPath } from "@/module/Application/routes.tsx"
import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"

export function LayoutComponent() {
  const route = getRouteByPath(useLocation().pathname)

  return (
    <>
      <Flex>
        <Box>
          <NavigationComponent />
        </Box>
        <Box>
          <Box px={16} py={4}>
            {route?.title && (
              <Heading
                as="h1"
                size="xl"
                color={"gray.600"}
                textTransform={"uppercase"}
              >
                {route.title}
              </Heading>
            )}
            {route?.subTitle && (
              <LightTextComponent textTransform={"uppercase"}>
                {route.subTitle}
              </LightTextComponent>
            )}

            <Box mt={5}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
