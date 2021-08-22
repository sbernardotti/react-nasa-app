export default function getDateType(date) {
  date = date + "";
  return date.indexOf("-") !== -1 ? "earth" : "sol";
}
