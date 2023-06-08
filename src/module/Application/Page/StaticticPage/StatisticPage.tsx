import { useDayStore } from "@/module/Day/Application/DayStore.ts"
import { useMetricTypeStore } from "@/module/MetricType/Application/MetricTypeStore.ts"
import { StatisticItemComponent } from "@/module/Application/Page/StaticticPage/Component/StatisticItemComponent.tsx"
import { Box, Grid } from "@chakra-ui/react"

export function StatisticPage() {
  const dayStore = useDayStore()
  const metricTypeStore = useMetricTypeStore()

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap={6}>
      {metricTypeStore.items.map((metricType) => {
        return (
          <Box mr={5} key={metricType.id}>
            <StatisticItemComponent metricType={metricType} days={dayStore.items} />
          </Box>
        )
      })}
    </Grid>
  )
}
