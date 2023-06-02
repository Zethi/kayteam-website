export function timestampToTextConverter(UNIX_timestamp: number) {
  const timestampDate = new Date(UNIX_timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = timestampDate.getFullYear();
  const month = months[timestampDate.getMonth()];
  const day = timestampDate.getDate();

  return day + " " + month + " " + year;
}
