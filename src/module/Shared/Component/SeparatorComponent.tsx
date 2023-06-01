import { Divider, DividerProps } from "@chakra-ui/react"

export function SeparatorComponent(props: DividerProps) {
  return <Divider borderColor={"gray.300"} orientation="horizontal" {...props} />
}
