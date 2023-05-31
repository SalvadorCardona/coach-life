import MonthEnum from "@/module/Shared/Application/Date/MonthEnum.ts"

interface Args {
  year: number
  month: number | MonthEnum
  day: number
}
export default function createDate(args: Args): Date {
  const date = new Date(args.year, args.month, args.day)
  args = {
    ...{
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    },
    ...args,
  }
  return new Date(args.year, args.month, args.day)
}
