import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { Text } from "@chakra-ui/react"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import { ChartConfiguration } from "chart.js"

export interface StatisticItemComponentPropsInterface {
  metricType: MetricTypeInterface
  days: DayInterface[]
}

export function StatisticItemComponent(props: StatisticItemComponentPropsInterface) {
  const ref = useRef<HTMLCanvasElement>(null)

  const dayList = props.days.map((day) => formatDate(day.createdDate))

  const metricValueList = props.days.map((day) => {
    const metric = day.metrics.find((metric) => {
      return metric.metricTypeId === props.metricType.id
    })

    return metric ? metric.value : 0
  })

  useEffect(() => {
    if (!ref.current) return

    const data = {
      labels: dayList,
      datasets: [
        {
          data: metricValueList,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    }

    const config: ChartConfiguration = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      },
    }

    const myChart = new Chart(ref.current, config)

    return () => {
      myChart.destroy()
    }
  }, [])

  return (
    <WrapperComponent>
      <Text>{props.metricType.name}</Text>
      <canvas ref={ref}></canvas>
    </WrapperComponent>
  )
}
