export const getDay = (day) => {
  const date = new Date(day);
  const options = { weekday: "long" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(date);
  return dayOfWeek;
};
