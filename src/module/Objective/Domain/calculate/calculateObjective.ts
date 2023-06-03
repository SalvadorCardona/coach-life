import calculateRatio, {
  Ratio,
} from "@/module/Shared/Application/Math/calculateRatio.ts"
import { ObjectiveTypeEnum } from "@/module/Objective/Domain/ObjectiveTypeEnum.ts"

export default function calculateObjective(
  objectiveNeeded: number,
  objectiveValue: number,
  objectiveType: ObjectiveTypeEnum = ObjectiveTypeEnum.TO_EXCEED
): Ratio {
  const delta = objectiveNeeded - objectiveValue
  if (delta === 0) return 1

  if (objectiveNeeded === 0) objectiveNeeded = 1
  if (objectiveValue === 0) objectiveValue = 1

  return ObjectiveTypeEnum.TO_EXCEED === objectiveType
    ? calculateRatio(objectiveValue, objectiveNeeded)
    : calculateRatio(objectiveNeeded, objectiveValue)
}
