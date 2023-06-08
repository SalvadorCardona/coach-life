import { Text, TextProps } from "@chakra-ui/react"

export function LightTextComponent(props: TextProps) {
  return (
    <>
      <Text {...props} color={"gray.400"}>
        {props.children}
      </Text>
    </>
  )
}
