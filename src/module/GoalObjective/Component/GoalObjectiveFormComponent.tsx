import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { FormEvent, useState } from "react"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"
import createGoalObjective from "@/module/GoalObjective/Domain/createGoalObjective.ts"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import formDataToObject from "@/module/Shared/Application/Form/formDataToObject.ts"
import { TimePeriodEnum } from "@/module/Shared/Application/Date/TimePeriodEnum.ts"
import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"

interface GoalObjectiveFormComponentPropsInterface {
  addGoalObjective: (goalObjective: GoalObjectiveInterface) => void
  goalTypes: GoalTypeInterface[]
  goalType?: GoalTypeInterface
}

export function GoalObjectiveFormComponent(
  props: GoalObjectiveFormComponentPropsInterface
) {
  const [newGoalOjective, setGoalOjective] = useState<GoalObjectiveInterface>(
    createGoalObjective()
  )
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = {
      ...newGoalOjective,
      ...formDataToObject<GoalObjectiveInterface>(event.target as HTMLFormElement),
    }

    formData.value = Number(formData.value)

    props.addGoalObjective(formData)
    setGoalOjective(createGoalObjective())
  }

  return (
    <>
      <WrapperComponent>
        <form onSubmit={handleSubmit}>
          <SubTitleComponent>Add a new objective</SubTitleComponent>
          <FormControl mt={5}>
            <FormLabel>Name :</FormLabel>
            <Input
              required={true}
              name={"name"}
              type="text"
              defaultValue={newGoalOjective.name}
              placeholder={"Your name..."}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Value :</FormLabel>
            <Input
              name={"value"}
              type="number"
              defaultValue={newGoalOjective.value}
              placeholder={"Your value..."}
            />
          </FormControl>

          {!props?.goalType && (
            <FormControl mt={5}>
              <FormLabel>Goal Type :</FormLabel>
              <Select name={"goalTypeId"}>
                {props.goalTypes.map((goalType) => {
                  return (
                    <option key={goalType.id} value={goalType.id}>
                      {goalType.name}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
          )}

          {props?.goalType && (
            <Input name={"goalTypeId"} type="hidden" value={props?.goalType.id} />
          )}

          <FormControl mt={5}>
            <FormLabel>By type day :</FormLabel>
            <Select name={"byTypeTime"}>
              {Object.values(TimePeriodEnum).map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              })}
            </Select>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>By type day :</FormLabel>
            <Select name={"type"}>
              {Object.values(GoalObjectiveTypeEnum).map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              })}
            </Select>
          </FormControl>

          <ButtonComponent {...{ type: "submit", mt: 5 }}>
            Add objective
          </ButtonComponent>
        </form>
      </WrapperComponent>
    </>
  )
}
