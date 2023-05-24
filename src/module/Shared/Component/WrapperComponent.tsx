import { ReactNode } from "react"
import { Box, Center, useColorModeValue } from "@chakra-ui/react"

export function WrapperComponent(props: { children: ReactNode }) {
  return (
    <Center>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        {props.children}
      </Box>
    </Center>
  )
}
