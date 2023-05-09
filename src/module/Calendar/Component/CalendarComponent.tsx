import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import { formatDate } from "@/module/Shared/Domain/Manager/Date/formatDate.ts"
import createPaginationCalendar from "@/module/Calendar/Domain/createPaginationCalendar.ts"
import cn from "classnames"
import isSameDay from "@/module/Shared/Domain/Manager/Date/isSameDay.ts"

export interface CalendarComponentPropsInterface {
  currentDay: DayInterface
  onClick: (date: Date) => void
}

export function CalendarComponent(props: CalendarComponentPropsInterface) {
  const onClick = (date: Date) => props.onClick(date)

  const isSelect = (day: Date): boolean =>
    isSameDay(day, props.currentDay.createdDate)

  return (
    <div>
      {createPaginationCalendar().map((day) => {
        return (
          <button
            key={day.toString()}
            onClick={() => onClick(day)}
            className={cn("m-5", isSelect(day) ? "btn_primary" : "btn_secondary")}
          >
            {formatDate(day)}
          </button>
        )
      })}
    </div>
  )
}
