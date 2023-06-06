import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import {
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { DayItemTableComponent } from "@/module/Application/Page/DaysPage/Component/DayItemTableComponent.tsx"
import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import { useMetricStore } from "@/module/Metric/Application/MetricStore.ts"
import { formatDateWithoutDay } from "@/module/Shared/Application/Date/formatDateWithoutDay.ts"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"

import { useState } from "react"
import { ModalMetricTypeFormComponent } from "@/module/MetricType/Component/ModalMetricTypeFormComponent.tsx"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { IoIosAdd } from "react-icons/io"
import MetricInterface from "@/module/Metric/Domain/MetricInterface.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"

export function DaysPage() {
  const dayStore = useDayStore()
  const metricTypeStore = useMetricTypeStore()
  const metricStore = useMetricStore()
  const objectiveStore = useObjectiveStore()

  const [currentDate, currentDateSetter] = useState<Date>(new Date())
  const { isOpen, onOpen, onClose } = useDisclosure()

  const days = createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: dayStore.items,
    metrics: metricStore.items,
    metricTypes: metricTypeStore.items,
    objectives: objectiveStore.items,
  }).reverse()

  const changeDateHandler = (direction: -1 | 1) => {
    const monthTarget = currentDate.getMonth() + direction
    const newDate = new Date(currentDate.getFullYear(), monthTarget, 1)
    currentDateSetter(newDate)
  }

  const updateHandler = (day: DayInterface, metric: MetricInterface) => {
    dayStore.updateMetric(day.id, metric)
  }

  return (
    <>
      <ModalMetricTypeFormComponent
        updateMetricType={metricTypeStore.updateMetricType}
        isOpen={isOpen}
        onClose={onClose}
      ></ModalMetricTypeFormComponent>
      <Flex alignItems="center" justifyContent={"center"}>
        <ButtonComponent
          size="xs"
          leftIcon={<Icon as={BiChevronLeft} color={"white"} />}
          onClick={() => changeDateHandler(-1)}
        ></ButtonComponent>
        <Text textTransform={["uppercase"]} as="b" fontSize="lg" px={5}>
          {formatDateWithoutDay(currentDate)}
        </Text>
        <ButtonComponent
          size="xs"
          leftIcon={<Icon as={BiChevronRight} color={"white"} />}
          onClick={() => changeDateHandler(1)}
        ></ButtonComponent>
      </Flex>
      <TableContainer style={{ overflowY: "unset", overflowX: "unset" }}>
        <Table variant="simple">
          <Thead style={{ position: "sticky", top: 0, zIndex: 1 }} bg={"white"}>
            <Tr>
              <Th>Day</Th>
              {metricTypeStore.items.map((metricType) => {
                return <Th key={metricType.id}>{metricType.name}</Th>
              })}
              <Th>Score</Th>
              <Th>
                <ButtonComponent
                  mt={2}
                  size="xs"
                  leftIcon={<Icon as={IoIosAdd} color={"white"} />}
                  onClick={() => onOpen()}
                >
                  Add a metric type
                </ButtonComponent>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {days.map((day) => {
              return (
                <DayItemTableComponent
                  key={day.id}
                  day={day}
                  metricTypes={metricTypeStore.items}
                  onUpdate={(metric) => updateHandler(day, metric)}
                />
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
