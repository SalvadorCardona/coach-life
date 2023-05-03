import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface GoalTypeComponentPropsInterface {
  goalType: GoalTypeInterface
  removeHandler: (goalType: GoalTypeInterface) => void
}

export function GoalTypeComponent(props: GoalTypeComponentPropsInterface) {
  return (
    <div>
      Hello {props.goalType.name}
      <button onClick={() => props.removeHandler(props.goalType)}>x</button>
    </div>
  )
}
