import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

export interface GoalObjectiveItemComponentPropsInterface {
  goalObjective: GoalObjectiveInterface
}

export function GoalObjectiveItemComponent({
  goalObjective,
}: GoalObjectiveItemComponentPropsInterface) {
  return (
    <>
      <div>id : {goalObjective.id}</div>
      <div>goalId: {goalObjective.goalId}</div>
      <div>goalName : {goalObjective.name}</div>
      <div>bytypeTime : {goalObjective.byTypeTime}</div>
      <div>value {goalObjective.value}</div>
    </>
  )
}
