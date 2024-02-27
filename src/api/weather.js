export const getWeather = async (city, start, end) => {
  const weather = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${start}/${end}?unitGroup=metric&include=days&key=DPU3S4PU5AQ43WWC9UWP446H9&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  );

  const data = await weather.json();
  return data.days;
};

export const getWeatherToday = async (city) => {
  const weather = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=DPU3S4PU5AQ43WWC9UWP446H9&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  );

  const data = await weather.json();
  return data;
};
