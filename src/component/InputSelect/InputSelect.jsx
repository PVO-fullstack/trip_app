"use client";

import React, { useState } from "react";
import styles from "./InputSelect.module.css";
import cities from "@/data/cities.json";

export const InputSelect = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inValid, setInValid] = useState(false);

  return (
    <>
      <label className={styles.label}>
        <p>
          <span className={inValid ? styles.none : styles.required}>*</span>
          {title}
        </p>
        <select
          onChange={() => setInValid(true)}
          className={styles.city}
          onClick={() => setIsOpen(true)}
          required
          defaultValue={"Please select a city"}
          name="city"
        >
          <option
            className={isOpen ? styles.placeholder : ""}
            // selected
            disabled
            value="Please select a city"
          >
            Please select a city
          </option>
          {
            cities.map((city) => (
              <option key={city.id} value={city.city}>
                {city.city}
              </option>
            ))
            //   <option value="Tokio">Tokio</option>
            // <option value="Barselona">Barselona</option>
          }
        </select>
      </label>
    </>
  );
};
