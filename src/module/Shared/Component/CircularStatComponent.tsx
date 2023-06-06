import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
import ratioTOPercentage from "@/module/Shared/Application/Math/ratioTOPercentage.ts"

export interface CircularStatComponentPropsInterface {
  ratio: Ratio
}

export function CircularStatComponent(props: CircularStatComponentPropsInterface) {
  const ratio = ratioTOPercentage(props.ratio)
  return (
    <CircularProgress value={ratio} color={ratio > 99 ? "green.400" : "red.400"}>
      <CircularProgressLabel>{ratio} %</CircularProgressLabel>
    </CircularProgress>
  )
}
