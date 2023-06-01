import { FormEvent, useState } from "react"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { createMetricType } from "@/module/MetricType/Domain/createMetricType.ts"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import MetricTypeMetricEnum from "@/module/MetricType/Domain/MetricTypeMetricEnum.ts"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import formDataToObject from "@/module/Shared/Application/Form/formDataToObject.ts"
import GoalObjectiveInterface from "@/module/GoalObjective/Domain/GoalObjectiveInterface.ts"

export interface MetricTypeFormComponentPropsInterface {
  updateMetricType: (metricType: MetricTypeInterface) => void
  onAdd?: () => void
}

export function MetricTypeFormComponent(
  props: MetricTypeFormComponentPropsInterface
) {
  const [newMetricType, setMetricType] = useState<MetricTypeInterface>(
    createMetricType()
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = {
      ...newMetricType,
      ...formDataToObject<GoalObjectiveInterface>(event.target as HTMLFormElement),
    }

    formData.defaultValue = Number(formData.defaultValue)

    props.updateMetricType(formData)
    setMetricType(createMetricType())

    if (props.onAdd) props.onAdd()
  }

  return (
    <WrapperComponent>
      <form onSubmit={handleSubmit}>
        <SubTitleComponent>Add a new metric type</SubTitleComponent>
        <FormControl mt={5}>
          <FormLabel>Name :</FormLabel>
          <Input
            required={true}
            type="text"
            defaultValue={newMetricType.name}
            placeholder={"Your name..."}
            name={"name"}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Default value :</FormLabel>
          <Input
            type="number"
            defaultValue={newMetricType.defaultValue}
            placeholder={"Your defaults value..."}
            name={"defaultValue"}
          />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Metrics :</FormLabel>
          <Select name={"metric"}>
            {Object.values(MetricTypeMetricEnum).map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            })}
          </Select>
        </FormControl>

        <ButtonComponent {...{ type: "submit", mt: 5 }}>
          Add metric type
        </ButtonComponent>
      </form>
    </WrapperComponent>
  )
}
