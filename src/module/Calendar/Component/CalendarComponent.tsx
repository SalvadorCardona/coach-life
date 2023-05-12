import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import createPaginationCalendar from "@/module/Calendar/Domain/createPaginationCalendar.ts"
import cn from "classnames"
import isSameDay from "@/module/Shared/Application/Date/isSameDay.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"
import flatpickr from "flatpickr"
import { useEffect, useRef } from "react"
import "flatpickr/dist/flatpickr.css"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import ChevronDoubleLeft from "./Asset/chevron-double-left.svg"
import BiCalendarType from "./Asset/bi-calendar-date.svg"

export interface CalendarComponentPropsInterface {
  currentDate: DateString
  onClick: (currentDate: DateString) => void
}

export function CalendarComponent(props: CalendarComponentPropsInterface) {
  const datePickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    flatpickr(datePickerRef.current as HTMLDivElement, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      onChange: (selectedDates) => {
        props.onClick(serializerDate(selectedDates[0]))
      },
    })
  }, [props.currentDate])

  return (
    <div>
      {createPaginationCalendar().map((date) => {
        return (
          <button
            key={date.toString()}
            onClick={() => props.onClick(serializerDate(date))}
            className={cn(
              "mr-2 mt-2",
              isSameDay(date, props.currentDate) ? "btn_primary" : "btn_secondary"
            )}
          >
            {formatDate(date)}
          </button>
        )
      })}
      <div className={"w-56 mt-5"}>
        <SubTitleComponent>Choose a date</SubTitleComponent>
        <div ref={datePickerRef} className={"btn_primary"}>
          <BiCalendarType />
          {formatDate(props.currentDate)}
        </div>
      </div>
    </div>
  )
}
