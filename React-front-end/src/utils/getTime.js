export default function getDate(date) {
  const $Date = new Date(date);
  const dateString = `${$Date.getMonth()}-${$Date.getFullYear()}-${$Date.getDate()}`;
  const timeString = $Date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${dateString} , ${timeString}`;
}
//  YY--MM--DD
export function getYearMonthDay(date) {
  const $Date = new Date(date);
  return `${$Date.getMonth()}-${$Date.getFullYear()}-${$Date.getDate()}`;
}

// HH-MM
export function getTime(date) {
  const $Date = new Date(date);
  const time = $Date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time;
}
