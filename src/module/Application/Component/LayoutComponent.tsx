import { Box, Flex, Text } from "@chakra-ui/react"
import { NavigationComponent } from "@/module/Shared/Component/Navigation/NavigationComponent.tsx"
import { Outlet, useLocation } from "react-router-dom"
import { getRouteByPath } from "@/module/Application/routes.tsx"
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"

export interface LayoutComponentPropsInterface {}

export function LayoutComponent(props: LayoutComponentPropsInterface) {
  const route = getRouteByPath(useLocation().pathname)

  return (
    <>
      <Flex>
        <Box>
          <NavigationComponent />
        </Box>
        <Box>
          <Box px={16} py={4}>
            {route?.title && <TitleComponent>{route.title}</TitleComponent>}
            {route?.subTitle && <Text>{route.subTitle}</Text>}
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  )
}
