export function formatDate(date: Date): string {
  return date.toDateString()
  //
  // return `
  //   ${date.getDate()} /
  //   ${date.getMonth()} /
  //   ${date.getUTCFullYear()}
  // `
}
