import { ButtonProps, Icon } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { IoIosAdd } from "react-icons/io"

export function AddButtonComponent(props: ButtonProps) {
  return (
    <ButtonComponent
      size="xs"
      {...props}
      leftIcon={<Icon as={IoIosAdd} color={"white"} />}
    >
      {props.children}
    </ButtonComponent>
  )
}
