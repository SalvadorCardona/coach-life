import { FormEvent, useState } from "react"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { createGoalType } from "@/module/GoalType/Domain/createGoalType.ts"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import GoalTypeMetricEnum from "@/module/GoalType/Domain/GoalTypeMetricEnum.ts"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import formDataToObject from "@/module/Shared/Application/Form/formDataToObject.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

export interface GoalTypeFormComponentPropsInterface {
  updateGoalType: (goalType: GoalTypeInterface) => void
}

export function GoalTypeFormComponent(props: GoalTypeFormComponentPropsInterface) {
  const [newGoalType, setGoalType] = useState<GoalTypeInterface>(createGoalType())

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = {
      ...newGoalType,
      ...formDataToObject<GoalObjectiveInterface>(event.target as HTMLFormElement),
    }

    formData.defaultValue = Number(formData.defaultValue)

    props.updateGoalType(formData)
    setGoalType(createGoalType())
  }

  return (
    <WrapperComponent>
      <form onSubmit={handleSubmit}>
        <SubTitleComponent>Add a new goal type</SubTitleComponent>
        <FormControl mt={5}>
          <FormLabel>Name :</FormLabel>
          <Input
            required={true}
            type="text"
            defaultValue={newGoalType.name}
            placeholder={"Your name..."}
            name={"name"}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Default value :</FormLabel>
          <Input
            type="number"
            defaultValue={newGoalType.defaultValue}
            placeholder={"Your defaults value..."}
            name={"defaultValue"}
          />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Metrics :</FormLabel>
          <Select name={"metric"}>
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
