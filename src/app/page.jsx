"use client";

import { Search } from "@/component/Search/Search";
import { CityList } from "@/component/CityList/CityList";
import { Week } from "@/component/Week/Week";
import { useEffect, useState } from "react";
import { getWeather, getWeatherToday } from "@/api/weather";
import styles from "./page.module.css";
import { TodayCard } from "@/component/TodayCard/TodayCard";

export default function Home() {
  const [cityWeather, setCityWeather] = useState();
  const [today, setToday] = useState();
  const [startTrip, setStartTrip] = useState();
  const [active, setActive] = useState();
  const [city, setCity] = useState();

  const onSeach = (data) => {
    setCity(data);
  };

  const onCardClick = async (data) => {
    const { city, start, end } = data;
    setStartTrip(start);
    setActive(city);
    const weather = await getWeather(city, start, end);
    setCityWeather(weather);
    const weatherToday = await getWeatherToday(city);
    setToday(weatherToday);
  };

  return (
    <main>
      <div className={styles.conteiner}>
        <div className={styles.weather_list}>
          <h1 className={styles.title}>
            Weather <span className={styles.title_bold}>Forecast</span>
          </h1>
          <Search search={onSeach} />
          <CityList city={city} active={active} click={onCardClick} />
          {cityWeather && <Week weather={cityWeather} />}
        </div>
        <div>
          {today && startTrip && <TodayCard today={today} time={startTrip} />}
        </div>
      </div>
    </main>
  );
}
