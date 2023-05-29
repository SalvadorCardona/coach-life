import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { useEffect, useRef } from "react"
import { Chart } from "chart.js"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import deSerializerDate from "@/module/Shared/Application/Date/deSerializerDate.ts"

export interface StatisticItemComponentPropsInterface {
  goalType: GoalTypeInterface
  goalDays: DayInterface[]
}

export function StatisticItemComponent(props: StatisticItemComponentPropsInterface) {
  const ref = useRef<HTMLCanvasElement>(null)

  const dayList = props.goalDays.map((day) => {
    const date = deSerializerDate(day.createdDate)
    return date.getDay() + "/" + date.getMonth()
  })

  const goalDayValueList = props.goalDays.map((day) => {
    const goalDay = day.goalDays.find((goalDay) => {
      return goalDay.goalType?.id === props.goalType.id
    })

    return goalDay ? goalDay.value : 0
  })

  useEffect(() => {
    if (!ref.current) return

    const data = {
      labels: dayList,
      datasets: [
        {
          data: goalDayValueList,
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
