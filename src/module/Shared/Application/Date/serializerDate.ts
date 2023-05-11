import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

export default function serializerDate(date: Date): DateString {
  return date.toUTCString()
}
