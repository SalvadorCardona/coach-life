import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { ChartConfiguration, ChartDataset } from "chart.js/dist/types"
import { useEffect, useRef } from "react"
import { Chart } from "chart.js"
import getMetricsByMetricTypeId from "@/module/GoalMetric/Domain/getMetricsByMetricTypeId.ts"
import { useTheme } from "@chakra-ui/react"

export interface GlobalStatisticComponentPropsInterface {
  days: DayInterface[]
  metricTypes: MetricTypeInterface[]
}

function createDataSet(label: string, values: number[]): ChartDataset {
  return {
    label: label,
    data: values,
    fill: true,
    backgroundColor: "rgba(75,192,192,1)",
    borderColor: "rgba(75,192,192,1)",
  }
}

export function GlobalStatisticComponent(
  props: GlobalStatisticComponentPropsInterface
) {
  const { days, metricTypes } = props
  const dayList = days.map((day) => formatDate(day.createdDate))
  const ref = useRef<HTMLCanvasElement>(null)

  let datasets: ChartDataset[] = []

  const theme = useTheme()

  days.forEach((day) => {
    datasets = metricTypes.map((metricType) => {
      const metrics = getMetricsByMetricTypeId(day.goalMetrics, metricType.id).map(
        (metric) => metric?.value ?? 0
      )
      return createDataSet(metricType.name, metrics)
    })
  })

  datasets = metricTypes.map((metricType) => {
    const values: number[] = []
    days.forEach((day) => {
      getMetricsByMetricTypeId(day.goalMetrics, metricType.id).forEach((metric) => {
        values.push(metric?.value ?? 0)
      })
    })

    return createDataSet(metricType.name, values)
  })

  const config: ChartConfiguration = {
    type: "line",
    data: {
      labels: dayList,
      datasets: datasets,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  }

  useEffect(() => {
    if (!ref.current) return

    const myChart = new Chart(ref.current, config)

    return () => {
      myChart.destroy()
    }
  }, [])

  return (
    <>
      <canvas ref={ref}></canvas>
    </>
  )
}
