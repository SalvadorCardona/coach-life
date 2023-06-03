import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import { useEffect, useRef } from "react"
import { ChartConfiguration, ChartDataset } from "chart.js"
import Chart from "chart.js/auto"
import getMetricListByMetricTypeId from "@/module/Metric/Domain/getMetricListByMetricTypeId.ts"
import { useTheme } from "@chakra-ui/react"
import generateRandomNumber from "@/module/Shared/Application/Math/generateRandomNumber.ts"

export interface GlobalStatisticComponentPropsInterface {
  days: DayInterface[]
  metricTypes: MetricTypeInterface[]
}

function createDataSet(
  label: string,
  values: number[],
  color: string
): ChartDataset {
  return {
    label: label,
    data: values,
    fill: true,
    backgroundColor: "transparent",
    borderColor: color,
  }
}

export function GlobalStatisticComponent(
  props: GlobalStatisticComponentPropsInterface
) {
  const { days, metricTypes } = props
  const dayList = days.map((day) => formatDate(day.createdDate))
  const ref = useRef<HTMLCanvasElement>(null)

  let datasets: ChartDataset[] = []

  const themeColors = useTheme().colors
  const colors: string[] = []

  Object.keys(themeColors).forEach((color) => {
    if (
      ["black", "transparent", "blackAlpha", "white", "whiteAlpha", "gray"].includes(
        color
      )
    )
      return
    const currentColor = themeColors[color]["400"]
    if (currentColor) {
      colors.push(currentColor)
    }
  })

  datasets = metricTypes.map((metricType, index) => {
    const values: number[] = []
    days.forEach((day) => {
      getMetricListByMetricTypeId(day.metrics, metricType.id).forEach((metric) => {
        values.push(metric?.value ?? 0)
      })
    })

    return createDataSet(metricType.name, values, colors, colors[index])
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
          position: "right",
          display: true,
        },
        title: {
          display: false,
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
