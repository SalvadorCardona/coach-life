import {
  getMenuRoutes,
  getRouteByPath,
  NavigationItemInterface,
} from "@/module/Application/routes.tsx"
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react"
import { Link as RouterLink, useLocation } from "react-router-dom"

export interface NavigationComponentPropsInterface {
  open?: boolean
}

export function NavigationComponent(props: NavigationComponentPropsInterface) {
  // const [open, setOpen] = useState<boolean>(props?.open ? props.open : !isMobile())
  const currentRoute = getRouteByPath(useLocation().pathname)

  const selectedStyle = {
    bgColor: "cyan.400",
    color: "white",
  }

  const isSelected = (route: NavigationItemInterface) => {
    return route.path === currentRoute?.path
  }

  if (!props.open) return <></>

  return (
    <>
      <Box minH="100vh" bg={"gray.100"}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Disciplinus
          </Text>
        </Flex>

        {getMenuRoutes().map((route) => {
          return (
            <RouterLink key={route.name} to={route.path as string}>
              <Flex
                {...(isSelected(route) ? selectedStyle : {})}
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
                {route.icon && <Icon mr="4" fontSize="16" as={route.icon} />}

                {route.name}
              </Flex>
            </RouterLink>
          )
        })}
      </Box>
    </>
  )
}
