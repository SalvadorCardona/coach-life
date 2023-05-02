import GoalDayInterface from "@/module/GoalDay/Domain/GoalDayInterface.ts"

export default interface DayInterface {
  goalDays: GoalDayInterface[]
  createdDate: Date
}
