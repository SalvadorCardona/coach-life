import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"

export interface GoalTypeComponentPropsInterface {
  goalType: GoalTypeInterface
  removeHandler: (goalType: GoalTypeInterface) => void
}

export function GoalTypeComponent(props: GoalTypeComponentPropsInterface) {
  return (
    <div className={"wrapper flex justify-between items-center"}>
      <span>{props.goalType.name}</span>
      <button
        className={"btn_danger"}
        onClick={() => props.removeHandler(props.goalType)}
      >
        x
      </button>
    </div>
  )
}
