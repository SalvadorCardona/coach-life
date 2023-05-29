import { Ratio } from "@/module/Shared/Application/Math/calculateRatio.ts"

export default function ratioTOPercentage(ratio: Ratio): number {
  return Math.floor(ratio * 100)
}
