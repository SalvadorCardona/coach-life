import { ButtonProps } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"

export function RemoveButtonComponent(props: ButtonProps) {
  return (
    <ButtonComponent colorScheme="red" size="xs" {...props}>
      X
    </ButtonComponent>
  )
}
