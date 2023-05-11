import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import createPaginationCalendar from "@/module/Calendar/Domain/createPaginationCalendar.ts"
import cn from "classnames"
import isSameDay from "@/module/Shared/Application/Date/isSameDay.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"

export interface CalendarComponentPropsInterface {
  currentDate: DateString
  onClick: (currentDate: DateString) => void
}

export function CalendarComponent(props: CalendarComponentPropsInterface) {
  return (
    <div>
      {createPaginationCalendar().map((date) => {
        return (
          <button
            key={date.toString()}
            onClick={() => props.onClick(serializerDate(date))}
            className={cn(
              "m-5",
              isSameDay(date, props.currentDate) ? "btn_primary" : "btn_secondary"
            )}
          >
            {formatDate(date)}
          </button>
        )
      })}
    </div>
  )
}
