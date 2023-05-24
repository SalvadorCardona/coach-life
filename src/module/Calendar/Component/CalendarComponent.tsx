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
import { TitleComponent } from "@/module/Shared/Component/Typography/TitleComponent.tsx"
import { SeparatorComponent } from "@/module/Shared/Component/SeparatorComponent.tsx"
import { WrapperComponent } from "@/module/Shared/Component/WrapperComponent.tsx"
import { ButtonComponent } from "@/module/Shared/Component/Form/ButtonComponent.tsx"
import { BsCalendarDate } from "react-icons/bs"

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
      <WrapperComponent>
        <div>
          <SubTitleComponent>Choose your date :</SubTitleComponent>
          <ButtonComponent attributes={{ mt: 5 }}>
            <BsCalendarDate />
            <span ref={datePickerRef} className={"ml-4"}>
              {formatDate(props.currentDate)}
            </span>
          </ButtonComponent>
        </div>
        <SeparatorComponent />
        {createPaginationCalendar(props.currentDate).map((date) => {
          return (
            <ButtonComponent
              attributes={{
                onClick: () => props.onClick(serializerDate(date)),
                colorScheme: isSameDay(date, props.currentDate) ? "blue" : "gray",
                isLoading: isAnimation,
                className: cn("mr-2 mt-2"),
              }}
              key={date.toString()}
            >
              {formatDate(date)}
            </ButtonComponent>
          )
        })}
      </WrapperComponent>
    </>
  )
}
