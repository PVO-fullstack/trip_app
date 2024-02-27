import React from "react";
import styles from "./TodayCard.module.css";
import { getDay } from "@/js/getDay";
import { WeatherSvg } from "weather-icons-animated";
import { Timer } from "../Timer/Timer";

export const TodayCard = ({ today, time }) => {
  const day = getDay(today.days[0].datetime);

  const { temp, icon } = today.days[0];

  return (
    <>
      {today?.address ? (
        <div className={styles.conteiner}>
          <p className={styles.day}>{day}</p>
          <div className={styles.weather}>
            <WeatherSvg
              state={
                (icon === "rain" && "rainy") ||
                (icon === "partly-cloudy-day" && "partlycloudy") ||
                (icon === "snow" && "snowy") ||
                (icon === "cloudy" && "cloudy") ||
                (icon === "clear-day" && "sunny")
              }
              width={50}
              height={50}
            />
            <p className={styles.temp}>
              {Math.round(temp)}
              <span className={styles.temp_name}>°C</span>
            </p>
          </div>
          <p className={styles.city}>{today.address}</p>
          {time && <Timer time={time} />}
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};
