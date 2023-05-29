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
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
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
  const goalTypeStore = useGoalTypeStore()

  return (
    <Flex>
      {goalTypeStore.goalTypes.map((goalType) => {
        return (
          <Box mr={5}>
            <StatisticItemComponent goalType={goalType} goalDays={dayStore.days} />
          </Box>
        )
      })}
    </Flex>
  )
}
