import { formatDate } from "@/module/Shared/Application/Date/formatDate.ts"
import createPaginationCalendar from "@/module/Calendar/Domain/createPaginationCalendar.ts"
import cn from "classnames"
import isSameDay from "@/module/Shared/Application/Date/isSameDay.ts"
import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"
import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"
import flatpickr from "flatpickr"
import { useEffect, useRef, useState } from "react"
import "flatpickr/dist/flatpickr.css"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import BiCalendarType from "./Asset/bi-calendar-date.svg"
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"

export interface CalendarComponentPropsInterface {
  currentDate: DateString
  onClick: (currentDate: DateString) => void
}

export function CalendarComponent(props: CalendarComponentPropsInterface) {
  const datePickerRef = useRef<HTMLDivElement>(null)
  const [isAnimation, setIsAnimation] = useState<boolean>(true)

  useEffect(() => {
    setIsAnimation(true)
    setTimeout(() => {
      setIsAnimation(false)
    }, 200)
  }, [props.currentDate])

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
    <>
      <TitleComponent>Your Calendar</TitleComponent>
      <div className={"wrapper"}>
        <div className={"w-56"}>
          <SubTitleComponent>Choose a date :</SubTitleComponent>
          <div ref={datePickerRef} className={"btn_primary"}>
            <BiCalendarType />
            <span className={"ml-4"}>{formatDate(props.currentDate)}</span>
          </div>
        </div>
        <SeparatorComponent />
        {createPaginationCalendar(props.currentDate).map((date) => {
          return (
            <button
              key={date.toString()}
              onClick={() => props.onClick(serializerDate(date))}
              className={cn(
                "mr-2 mt-2",
                isSameDay(date, props.currentDate) ? "btn_primary" : "btn_neutral",
                isAnimation ? "animate-bounce" : ""
              )}
            >
              {formatDate(date)}
            </button>
          )
        })}
      </div>
    </>
  )
}
