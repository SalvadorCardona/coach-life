import { Heading, HeadingProps } from "@chakra-ui/react"

export function TitleComponent(props: HeadingProps) {
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
