import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import styles from "./Week.module.css";
import { getDay } from "@/js/getDay";

export const Week = ({ weather }) => {
  return (
    <div className={styles.conteiner}>
      <h2>Week</h2>
      <ul className={styles.list}>
        {weather?.map((item) => (
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
    </div>
  );
};
