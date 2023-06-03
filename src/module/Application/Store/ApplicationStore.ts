import { create } from "zustand"
import { restore, update } from "@/module/Shared/Infratructure/repository.ts"

const name = "parameter-type"

export interface ParameterInterface {
  isFirstTime: boolean
}

export interface ApplicationState {
  parameter: ParameterInterface
  updateParameter: (parameter: ParameterInterface) => void
}

export function createParameter(): ParameterInterface {
  return {
    isFirstTime: true,
  }
}

export function persistParameter(items: ParameterInterface): void {
  update(name, items)
}

export function restoreParameter(): ParameterInterface {
  return restore<ParameterInterface>(name) ?? createParameter()
}

export const useApplicationStore = create<ApplicationState>((set) => ({
  parameter: restoreParameter(),
  updateParameter: (parameter: ParameterInterface) => {
    set({ parameter })
    persistParameter(parameter)
  },
}))
