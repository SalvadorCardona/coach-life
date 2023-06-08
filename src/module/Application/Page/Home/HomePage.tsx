import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import { GlobalStatisticComponent } from "@/module/Shared/Component/Stat/GlobalStatisticComponent.tsx"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import { useMetricStore } from "@/module/Metric/Application/MetricStore.ts"
import { formatDateWithoutDay } from "@/module/Shared/Application/Date/formatDateWithoutDay.ts"
import { Grid, GridItem, Text } from "@chakra-ui/react"
import { DayTableComponent } from "@/module/Application/Page/DayPage/Component/DayTableComponent.tsx"
import createDay from "@/module/Day/Domain/createDay.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"
import { TodoComponent } from "@/module/Todo/Component/TodoComponent.tsx"
import { useObjectiveStore } from "@/module/Objective/Application/ObjectiveStore.ts"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"
import { createDayRead } from "@/module/Day/Domain/DayRead.ts"
import { getDayByDate } from "@/module/Day/Domain/getDayByDate.ts"
export function HomePage() {
  const dayStore = useDayStore()
  const metricTypesStore = useMetricTypeStore()
  const currentDate = new Date()
  const currentDateSerialized = serializerDate(currentDate)
  const metricStore = useMetricStore()
  const objectiveStore = useObjectiveStore()

  const days = createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: dayStore.items,
    metrics: metricStore.items,
    metricTypes: metricTypesStore.items,
    objectives: objectiveStore.items,
  }).reverse()

  const dayCompleted = createDayRead({
    day:
      getDayByDate(currentDateSerialized, days) ??
      createDay({ createdDate: currentDateSerialized }),
    objectives: objectiveStore.items,
    metricTypes: metricTypesStore.items,
  })

  return (
    <>
      <SeparatorComponent></SeparatorComponent>
      {/*<HomeNavigationComponent />*/}
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6} mt={5}>
        <GridItem>
          <SubTitleComponent>
            <Text as="span" textTransform={"uppercase"}>
              {formatDateWithoutDay(currentDate)} statistics
            </Text>
          </SubTitleComponent>
          <GlobalStatisticComponent
            days={days}
            metricTypes={metricTypesStore.items}
          ></GlobalStatisticComponent>
        </GridItem>
        <GridItem>
          <SubTitleComponent>
            <Text as="span" textTransform={"uppercase"}>
              Your Days Metrics
            </Text>
          </SubTitleComponent>
          <DayTableComponent
            updateMetricType={metricTypesStore.updateMetricType}
            metricTypes={metricTypesStore.items}
            day={dayCompleted}
            updateMetric={dayStore.updateMetric}
            objectives={objectiveStore.items}
          />
        </GridItem>
      </Grid>
      <SubTitleComponent>
        <Text as="span" textTransform={"uppercase"}>
          Your Todo List
        </Text>
      </SubTitleComponent>
      <TodoComponent></TodoComponent>
    </>
  )
}
