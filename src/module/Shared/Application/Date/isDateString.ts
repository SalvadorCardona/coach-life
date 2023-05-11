import { DateString } from "@/module/Shared/Application/Date/DateStringType.ts"

export default function isDateString(dateString: Date | DateString): boolean {
  return typeof dateString === "string"
}
