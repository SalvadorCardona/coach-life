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
} from "@chakra-ui/react"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { DayItemTableComponent } from "@/module/Application/Page/DaysPage/Component/DayItemTableComponent.tsx"
import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import { useGoalMetricStore } from "@/module/GoalMetric/Application/GoalMetricStore.ts"
import { formatDateWithoutDay } from "@/module/Shared/Application/Date/formatDateWithoutDay.ts"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { BiChevronLeft, IoIosAdd, BiChevronRight } from "react-icons/all"
import { useState } from "react"

export function DaysPage() {
  const dayStore = useDayStore()
  const metricTypeStore = useMetricTypeStore()
  const goalMetricStore = useGoalMetricStore()
  const [currentDate, currentDateSetter] = useState<Date>(new Date())

  const days = createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: dayStore.days,
    goalMetrics: goalMetricStore.goalMetrics,
    metricTypes: metricTypeStore.metricTypes,
  }).reverse()

  const changeDateHandler = (direction: -1 | 1) => {
    const monthTarget = currentDate.getMonth() + direction
    const newDate = new Date(currentDate.getFullYear(), monthTarget, 1)
    currentDateSetter(newDate)
  }

  return (
    <>
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
              {metricTypeStore.metricTypes.map((metricType) => {
                return <Th key={metricType.id}>{metricType.name}</Th>
              })}
              <Th>Score</Th>
              <Th>
                <ButtonComponent
                  mt={2}
                  size="xs"
                  leftIcon={<Icon as={IoIosAdd} color={"white"} />}
                  onClick={() => alert("Work in progress")}
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
                  metricTypes={metricTypeStore.metricTypes}
                  updateDay={dayStore.updateDay}
                />
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
