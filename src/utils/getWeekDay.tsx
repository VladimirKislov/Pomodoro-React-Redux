export function getWeekDay(date: any) {
  let days = [7, 1, 2, 3, 4, 5, 6];

  return days[date.getDay()];
}
