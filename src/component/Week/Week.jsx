"use client";

import React, { useEffect, useState } from "react";
import { WeatherSvg } from "weather-icons-animated";
import styles from "./Week.module.css";
import { getDay } from "@/js/getDay";
import { Button } from "../Button/Button";

export const Week = ({ weather }) => {
  const [firstWeek, setFirstWeek] = useState();
  const [weekNumber, setWeekNumber] = useState(0);
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(true);

  useEffect(() => {
    setWeekNumber(0);
    if (weather.length > 7) {
      const first = weather.slice(weekNumber * 7, weekNumber * 7 + 7);
      setFirstWeek(first);
      setNextDisable(false);
      return;
    }
    setFirstWeek(weather);
  }, [weather]);

  useEffect(() => {
    if (weather.length > 7) {
      const first = weather.slice(weekNumber * 7, weekNumber * 7 + 7);
      setFirstWeek(first);
    }
  }, [weekNumber]);

  const handleNextClick = () => {
    if (weekNumber === 0 && weather.length !== 15) {
      setNextDisable(true);
    }
    if (weather.length === 15 && weekNumber === 1) {
      setNextDisable(true);
    }
    setWeekNumber(weekNumber + 1);
    setPrevDisable(false);
  };

  const handlePrevClick = () => {
    if (weekNumber === 1) {
      setPrevDisable(true);
    }
    // if (weather.length === 15 && weekNumber === 1) {
    //   setNextDisable(true);
    // }
    setWeekNumber(weekNumber - 1);
    setNextDisable(false);
  };

  return (
    <div className={styles.conteiner}>
      <h2>Week</h2>
      <ul className={styles.list}>
        {firstWeek?.map((item) => (
          <li className={styles.item} key={item.datetime}>
            <p>{getDay(item.datetime)}</p>
            <WeatherSvg
              state={
                (item.icon === "rain" && "rainy") ||
                (item.icon === "partly-cloudy-day" && "partlycloudy") ||
                (item.icon === "snow" && "snowy") ||
                (item.icon === "cloudy" && "cloudy") ||
                (item.icon === "clear-day" && "sunny") ||
                (item.icon === "wind" && "windy")
              }
              width={80}
              height={80}
            />
            <p>
              {Math.round(item.tempmax)}°/{Math.round(item.tempmin)}°
            </p>
          </li>
        ))}
      </ul>
      <div className={styles.btn_conteiner}>
        <Button
          className={styles.btn}
          disabled={prevDisable}
          click={handlePrevClick}
          type={"button"}
          name={"Prev week"}
        />
        <Button
          className={styles.btn}
          disabled={nextDisable}
          click={handleNextClick}
          type={"button"}
          name={"Next week"}
        />
      </div>
    </div>
  );
};
