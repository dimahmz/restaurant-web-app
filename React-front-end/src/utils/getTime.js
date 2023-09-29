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
