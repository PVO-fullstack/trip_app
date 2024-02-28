import React, { useState } from "react";
import styles from "./InputDate.module.css";

export const InputDate = ({ title, name }) => {
  const [inputType, setInputType] = useState("text");
  const [inValid, setInValid] = useState(false);

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const todayString = tomorrow.toISOString().split("T")[0];
  const maxDay = new Date(tomorrow.setDate(tomorrow.getDate() + 14));
  const maxDayString = maxDay.toISOString().split("T")[0];

  return (
    <label className={styles.label}>
      <p className={styles.name}>
        <span className={inValid ? styles.none : styles.required}>*</span>
        {title}
      </p>
      <input
        className={styles.input}
        placeholder="Select date"
        onChange={() => setInValid(true)}
        required
        type={inputType}
        onFocus={() => setInputType("date")}
        onBlur={() => setInputType("text")}
        name={name}
        min={todayString}
        max={maxDayString}
      />
    </label>
  );
};
