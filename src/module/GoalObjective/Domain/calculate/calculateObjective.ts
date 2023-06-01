import calculateRatio, {
  Ratio,
} from "@/module/Shared/Application/Math/calculateRatio.ts"
import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"

export default function calculateObjective(
  objectiveNeeded: number,
  objectiveValue: number,
  objectiveType: GoalObjectiveTypeEnum = GoalObjectiveTypeEnum.TO_EXCEED
): Ratio {
  const delta = objectiveNeeded - objectiveValue
  if (delta === 0) return 1

  if (objectiveNeeded === 0) objectiveNeeded = 1
  if (objectiveValue === 0) objectiveValue = 1

  return GoalObjectiveTypeEnum.TO_EXCEED === objectiveType
    ? calculateRatio(objectiveValue, objectiveNeeded)
    : calculateRatio(objectiveNeeded, objectiveValue)
}
