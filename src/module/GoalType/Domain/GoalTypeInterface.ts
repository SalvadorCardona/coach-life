import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"

export default interface GoalTypeInterface {
  id: string
  name: string
  defaultValue: number
  metric: GoalTypeMetricEnum
}
