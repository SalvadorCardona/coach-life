import { HomeNavigationComponent } from "@/module/Application/Page/Home/Component/HomeNavigationComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"
import { GlobalStatisticComponent } from "@/module/Shared/Component/Stat/GlobalStatisticComponent.tsx"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import { useGoalMetricStore } from "@/module/GoalMetric/Application/GoalMetricStore.ts"
import { formatDateWithoutDay } from "@/module/Shared/Application/Date/formatDateWithoutDay.ts"
import { Text } from "@chakra-ui/react"
export function HomePage() {
  const dayStore = useDayStore()
  const metricTypeStore = useMetricTypeStore()
  const currentDate = new Date()
  const goalMetricStore = useGoalMetricStore()

  const days = createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: dayStore.items,
    goalMetrics: goalMetricStore.items,
    metricTypes: metricTypeStore.items,
  }).reverse()

  return (
    <>
      <HomeNavigationComponent />
      <SeparatorComponent orientation="horizontal" my={5} />
      <SubTitleComponent>
        <Text as="span" textTransform={"uppercase"}>
          {formatDateWithoutDay(currentDate)} statistics
        </Text>
      </SubTitleComponent>
      <GlobalStatisticComponent
        days={days}
        metricTypes={metricTypeStore.items}
      ></GlobalStatisticComponent>
    </>
  )
}
