import { Heading, HeadingProps } from "@chakra-ui/react"

export function SubTitleComponent(props: HeadingProps) {
  return (
    <>
      <Heading as="h3" size="lg" mb={5} color={"gray.600"} {...props}>
        {props.children}
      </Heading>
    </>
  )
}
