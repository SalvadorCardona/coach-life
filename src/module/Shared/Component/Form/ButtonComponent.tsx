import { ReactNode } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

export function ButtonComponent(props: {
  children: ReactNode
  attributes?: ButtonProps
}) {
  const baseAttributes: ButtonProps = {
    colorScheme: "blue",
    ...props.attributes,
  }

  return <Button {...baseAttributes}>{props.children}</Button>
}
