import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { useEffect, useRef } from "react"
import { Chart } from "chart.js"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"

export interface StatisticItemComponentPropsInterface {
  metricType: MetricTypeInterface
  goalMetrics: DayInterface[]
}

export function StatisticItemComponent(props: StatisticItemComponentPropsInterface) {
  const ref = useRef<HTMLCanvasElement>(null)

  const dayList = props.goalMetrics.map((day) => formatDate(day.createdDate))

  const goalMetricValueList = props.goalMetrics.map((day) => {
    const goalMetric = day.goalMetrics.find((goalMetric) => {
      return goalMetric.metricType?.id === props.metricType.id
    })

    return goalMetric ? goalMetric.value : 0
  })

  useEffect(() => {
    if (!ref.current) return

    const data = {
      labels: dayList,
      datasets: [
        {
          data: goalMetricValueList,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    }

    const config = {
      type: "line",
      data: data,
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const myChart = new Chart(ref.current, config)

    return () => {
      myChart.destroy()
    }
  }, [])

  return (
    <WrapperComponent>
      <SubTitleComponent>{props.metricType.name}</SubTitleComponent>
      <canvas ref={ref}></canvas>
    </WrapperComponent>
  )
}
