import { Box, Flex } from "@chakra-ui/react"
import { NavigationComponent } from "@/module/Application/Component/Navigation/NavigationComponent.tsx"
import { Outlet, RouterProvider } from "react-router-dom"

export interface LayoutComponentPropsInterface {}

export function LayoutComponent(props: LayoutComponentPropsInterface) {
  return (
    <>
      <Flex>
        <Box>
          <NavigationComponent />
        </Box>
        <Box>
          <div className={"px-16 p-4"}>
            <Outlet />
          </div>
        </Box>
      </Flex>
    </>
  )
}
