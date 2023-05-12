import flatpickr from "flatpickr"
import { useEffect, useRef } from "react"
import "flatpickr/dist/flatpickr.css"
export interface DatepickerComponentPropsInterface {}

export function DatepickerComponent(props: DatepickerComponentPropsInterface) {
  const datePickerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const a = flatpickr(datePickerRef.current, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    })

    console.log(a)
  }, [])

  return (
    <>
      <div>
        <div ref={datePickerRef}>a</div>
      </div>
    </>
  )
}
