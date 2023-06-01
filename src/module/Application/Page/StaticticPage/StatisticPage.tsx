import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { StatisticItemComponent } from "@/module/Application/Page/StaticticPage/Component/StatisticItemComponent.tsx"
import { Box, Flex } from "@chakra-ui/react"

export function StatisticPage() {
  const dayStore = useDayStore()
  const metricTypeStore = useMetricTypeStore()

  return (
    <Flex>
      {metricTypeStore.items.map((metricType) => {
        return (
          <Box mr={5} key={metricType.id}>
            <StatisticItemComponent metricType={metricType} days={dayStore.items} />
          </Box>
        )
      })}
    </Flex>
  )
}
