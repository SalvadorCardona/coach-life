import { Text, TextProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type LightTextComponentPropsType = { children: ReactNode } & TextProps

export function LightTextComponent(props: LightTextComponentPropsType) {
  return (
    <>
      <Text {...props} color={"gray.400"}>
        {props.children}
      </Text>
    </>
  )
}
