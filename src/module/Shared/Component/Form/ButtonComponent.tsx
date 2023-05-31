import { Button, ButtonProps } from "@chakra-ui/react"

type ButtonComponentPropsType = ButtonProps

export function ButtonComponent(props: ButtonComponentPropsType) {
  return (
    <Button {...props} colorScheme="blue">
      {props.children}
    </Button>
  )
}
