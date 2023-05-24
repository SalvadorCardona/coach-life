import { FormEvent, useState } from "react"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { createGoalType } from "@/module/GoalType/Domain/createGoalType.ts"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"

export interface GoalTypeFormComponentPropsInterface {
  updateGoalType: (goalType: GoalTypeInterface) => void
}

export function GoalTypeFormComponent(props: GoalTypeFormComponentPropsInterface) {
  const [newGoalType, setGoalType] = useState<GoalTypeInterface>(createGoalType())

  const nameHandler = (value: string) => {
    setGoalType({ ...newGoalType, name: value })
  }

  const defaultValueHandler = (value: string) => {
    setGoalType({ ...newGoalType, defaultValue: Number(value) })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.updateGoalType(newGoalType)
    setGoalType(createGoalType())
  }

  return (
    <WrapperComponent>
      <form onSubmit={handleSubmit}>
        <SubTitleComponent>Add a new goal type</SubTitleComponent>
        <FormControl mt={5}>
          <FormLabel>Name :</FormLabel>
          <Input
            type="text"
            value={newGoalType.name}
            onChange={(event) => nameHandler(event.target.value)}
            placeholder={"Your name..."}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Default value :</FormLabel>
          <Input
            type="number"
            value={newGoalType.defaultValue}
            onChange={(event) => defaultValueHandler(event.target.value)}
            placeholder={"Your defaults value..."}
          />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Metrics :</FormLabel>
          <Select>
            <option value={GoalTypeMetricEnum.QUANTITY}>Quantity</option>
            <option value={GoalTypeMetricEnum.HOUR}>Time in hour</option>
          </Select>
        </FormControl>

        <ButtonComponent attributes={{ type: "submit", mt: 5 }}>
          Add goal
        </ButtonComponent>
      </form>
    </WrapperComponent>
  )
}
