import ApplicationInterface from "@/module/Shared/Application/ApplicationInterface.ts"

export default function createApplication(): ApplicationInterface {
  return {
    currentDate: new Date(),
    days: [],
    goalTypes: [],
  }
}
