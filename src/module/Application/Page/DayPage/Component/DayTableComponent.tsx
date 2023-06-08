import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { DayTableItemComponent } from "@/module/Application/Page/DayPage/Component/DayTableItemComponent.tsx"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"
import getObjectiveByMetricTypeId from "@/module/Objective/Domain/getObjectiveByMetricTypeId.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import { DayReadInterface } from "@/module/Day/Domain/DayRead.ts"
import { AddButtonComponent } from "@/module/Shared/Component/Form/AddButtonComponent.tsx"
import { ModalMetricTypeFormComponent } from "@/module/MetricType/Component/ModalMetricTypeFormComponent.tsx"
import { LightTextComponent } from "@/module/Shared/Component/Typography/LightTextComponent.tsx"
import { CircularStatComponent } from "@/module/Shared/Component/CircularStatComponent.tsx"

export interface DayComponentPropsInterface {
  day: DayReadInterface
  metricTypes: MetricTypeInterface[]
  updateMetric: (dayId: DayInterface["id"], metric: MetricInterface) => void
  objectives: ObjectiveInterface[]
  updateMetricType: (metricType: MetricTypeInterface) => void
}

export function DayTableComponent(props: DayComponentPropsInterface) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const updateHandler = (metric: MetricInterface) => {
    props.updateMetric(props.day.id, metric)
  }

  return (
    <>
      <AddButtonComponent onClick={() => onOpen()}>
        Add metric Type
      </AddButtonComponent>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>Value</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.day.metrics.map((metric) => (
              <DayTableItemComponent
                key={metric.id}
                onUpdate={updateHandler}
                metric={metric}
                objectives={getObjectiveByMetricTypeId(
                  metric.metricTypeId as string,
                  props.objectives
                )}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {props.day.score && (
        <Flex px={5} mt={5} justifyContent={"flex-end"} alignItems="center">
          <LightTextComponent mr={5}>Total :</LightTextComponent>
          <CircularStatComponent ratio={props.day.score}></CircularStatComponent>
        </Flex>
      )}
      <ModalMetricTypeFormComponent
        updateMetricType={props.updateMetricType}
        isOpen={isOpen}
        onClose={onClose}
      ></ModalMetricTypeFormComponent>
    </>
  )
}
