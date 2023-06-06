import { Button, ButtonProps } from "@chakra-ui/react"

type ButtonComponentPropsType = ButtonProps

export function ButtonComponent(props: ButtonComponentPropsType) {
  return (
    <Button colorScheme="blue" {...props}>
      {props.children}
    </Button>
  )
}
