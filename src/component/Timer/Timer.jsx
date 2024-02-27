import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

export const Timer = ({ time }) => {
  const [today, setToday] = useState();
  const firstDay = new Date(time);
  const count = (firstDay - today) / 1000;
  const days = Math.floor(count / 86400) || 0;
  const hours = Math.floor((count - days * 86400) / 3600) || 0;
  const minutes = Math.floor((count - (days * 86400 + hours * 3600)) / 60) || 0;
  const seconds =
    Math.floor(count - (days * 86400 + hours * 3600 + minutes * 60)) || 0;

  useEffect(() => {
    let interval;
    setToday(new Date());
    interval = setInterval(() => setToday(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.conteiner}>
      <div className={styles.days}>
        <p className={styles.number}>{days}</p>
        <p className={styles.text}>Days</p>
      </div>
      <div className={styles.days}>
        <p className={styles.number}>{hours}</p>
        <p className={styles.text}>Hours</p>
      </div>
      <div className={styles.days}>
        <p className={styles.number}>{minutes}</p>
        <p className={styles.text}>Minutes</p>
      </div>
      <div className={styles.days}>
        <p className={styles.number}>{seconds}</p>
        <p className={styles.text}>Seconds</p>
      </div>
    </div>
  );
};
