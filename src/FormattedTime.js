export default function FormattedDate(props) {
  let minutes =
    props.date.getMinutes() < 10
      ? "0" + props.date.getMinutes()
      : props.date.getMinutes();
  let hours =
    props.date.getHours() > 12
      ? props.date.getHours() - 12
      : props.date.getHours();
  let amPm = props.date.getHours() >= 12 ? "pm" : "am";
  return `  ${hours}:${minutes} ${amPm}`;
}
