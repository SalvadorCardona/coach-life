import { restore, update } from "@/module/Shared/Infratructure/repository.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"

const name = "objective-type"

export function persistObjectType(days: ObjectiveInterface[]): void {
  update(name, days)
}

export function restoreObjectType(): ObjectiveInterface[] {
  return restore<ObjectiveInterface[]>(name) ?? []
}
