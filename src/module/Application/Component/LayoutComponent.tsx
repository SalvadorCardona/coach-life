import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import { NavigationComponent } from "@/module/Shared/Component/Navigation/NavigationComponent.tsx"
import { Outlet, useLocation } from "react-router-dom"
import { getRouteByPath } from "@/module/Application/routes.tsx"
import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"
import TopMenuComponent from "@/module/Shared/Component/TopMenu/TopMenuComponent.tsx"
import { useEffect } from "react"
import isMobile from "@/module/Shared/Infratructure/isMobile.ts"

export function LayoutComponent() {
  const route = getRouteByPath(useLocation().pathname)
  const { isOpen, onToggle, onOpen } = useDisclosure()

  useEffect(() => {
    if (!isMobile()) onOpen()
  }, [])

  return (
    <>
      <TopMenuComponent onOpenMenu={onToggle} />
      <Flex>
        <NavigationComponent open={isOpen} />
        <Box>
          <Box px={[4, 16]} py={4}>
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
