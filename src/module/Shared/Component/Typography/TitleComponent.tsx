import { ReactNode } from "react"
import { Heading } from "@chakra-ui/react"

export function TitleComponent(props: { children: ReactNode }) {
  return (
    <>
      <Heading
        as="h1"
        size="xl"
        color={"gray.600"}
        textTransform={"uppercase"}
        mb={5}
      >
        {props.children}
      </Heading>
    </>
  )
}
