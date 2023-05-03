import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"

export default interface DayInterface {
  id: string
  goalDays: GoalDayInterface[]
  createdDate: Date
}
