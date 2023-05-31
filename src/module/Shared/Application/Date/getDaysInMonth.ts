import MonthEnum from "@/module/Shared/Application/Date/MonthEnum.ts"

export default function getDaysInMonth(year: number, month: MonthEnum): Date[] {
  const daysInMonth = []
  const date = new Date(year, month, 1)

  while (date.getMonth() === month) {
    daysInMonth.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return daysInMonth
}
