import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { useEffect, useRef } from "react"
import { Chart } from "chart.js"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

export interface StatisticItemComponentPropsInterface {
  goalType: GoalTypeInterface
  goalMetrics: DayInterface[]
}

export function StatisticItemComponent(props: StatisticItemComponentPropsInterface) {
  const ref = useRef<HTMLCanvasElement>(null)

  const dayList = props.goalMetrics.map((day) => {
    const date = deSerializerDate(day.createdDate)
    return date.getDay() + "/" + date.getMonth()
  })

  const goalMetricValueList = props.goalMetrics.map((day) => {
    const goalMetric = day.goalMetrics.find((goalMetric) => {
      return goalMetric.goalType?.id === props.goalType.id
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
      <SubTitleComponent>{props.goalType.name}</SubTitleComponent>
      <canvas ref={ref}></canvas>
    </WrapperComponent>
  )
}
