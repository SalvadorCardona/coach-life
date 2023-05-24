import "./NavigationComponent.css"
import { useState } from "react"

import { routes } from "@/module/Application/routes.tsx"
import { RxHamburgerMenu } from "react-icons/all"
import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"

import { Link as RouterLink } from "react-router-dom"

export interface NavigationComponentPropsInterface {
  open?: boolean
}

export function NavigationComponent(props: NavigationComponentPropsInterface) {
  const [open, setOpen] = useState<boolean>(props.open ?? true)
  const childrenRoute = routes[0].children ?? []

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <Button colorScheme={"gray"} onClick={() => setOpen(!open)}>
          <RxHamburgerMenu />
        </Button>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            {open ? "Disciplinus" : "D"}
          </Text>
        </Flex>

        {childrenRoute.map((route) => {
          return (
            <RouterLink key={route.path} to={route.path as string}>
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
                    mr={open ? "4" : "0"}
                    fontSize="16"
                    _groupHover={{
                      color: "white",
                    }}
                    as={route.icon}
                  />
                )}

                {open ? route.name : ""}
              </Flex>
            </RouterLink>
          )
        })}
      </Box>
    </>
  )
}
