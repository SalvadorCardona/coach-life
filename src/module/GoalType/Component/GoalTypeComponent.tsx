import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface GoalTypeComponentPropsInterface {
  goalType: GoalTypeInterface
}

export function GoalTypeComponent(props: GoalTypeComponentPropsInterface) {
  return <div>Hello {props.goalType.name}</div>
}
