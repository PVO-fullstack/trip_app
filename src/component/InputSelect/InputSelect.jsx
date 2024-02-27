"use client";

import React, { useState } from "react";
import styles from "./InputSelect.module.css";
import cities from "@/data/cities.json";

export const InputSelect = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label className={styles.label}>
        {title}
        <select onClick={() => setIsOpen(true)} required name="city">
          <option
            className={isOpen ? styles.placeholder : ""}
            selected
            value="Select"
          >
            Please select a city
          </option>
          {
            cities.map((city) => (
              <option value={city.city}>{city.city}</option>
            ))
            //   <option value="Tokio">Tokio</option>
            // <option value="Barselona">Barselona</option>
          }
        </select>
      </label>
    </>
  );
};
