import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  LineController,
  LineElement,
  PointElement,
} from "chart.js"
import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { StatisticItemComponent } from "@/module/Application/Page/StaticticPage/Component/StatisticItemComponent.tsx"
import { Box, Flex } from "@chakra-ui/react"

Chart.register(
  LinearScale,
  BarController,
  CategoryScale,
  LineController,
  LineElement,
  PointElement
)

export function StatisticPage() {
  const dayStore = useDayStore()
  const metricTypeStore = useMetricTypeStore()

  return (
    <Flex>
      {metricTypeStore.metricTypes.map((metricType) => {
        return (
          <Box mr={5}>
            <StatisticItemComponent
              metricType={metricType}
              goalMetrics={dayStore.days}
            />
          </Box>
        )
      })}
    </Flex>
  )
}
