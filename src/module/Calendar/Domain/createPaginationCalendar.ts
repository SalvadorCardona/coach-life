export default function createPaginationCalendar(): Date[] {
  const maxDay = 7
  const days: Date[] = []
  const today = new Date()

  for (let i = 0; i <= maxDay; i++) {
    const date = new Date()
    date.setDate(today.getDate() - i)
    days.push(date)
  }

  return days.reverse()
}
