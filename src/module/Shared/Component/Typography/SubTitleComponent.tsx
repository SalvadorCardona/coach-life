import { ReactNode } from "react"
import { Heading } from "@chakra-ui/react"

export function SubTitleComponent(props: { children: ReactNode }) {
  return (
    <>
      <Heading as="h3" size="lg" mb={5} color={"gray.800"}>
        {props.children}
      </Heading>
    </>
  )
}
