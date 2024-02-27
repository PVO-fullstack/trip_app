"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./CityCard.module.css";

export const CityCard = ({ city, click, active }) => {
  // const [activeCity, setActiveCity] = useState();

  const handleClick = () => {
    // setActiveCity(city);
    click(city);
  };

  return (
    <li className={styles.item} onClick={handleClick}>
      <Image
        className={styles.img}
        src={city.img}
        alt={city.city}
        width={1200}
        height={1200}
      />
      <div
        className={active === city.city ? styles.active : styles.description}
      >
        <p className={styles.city}>{city.city}</p>
        <p>
          {city.start.split("-").reverse().join(".")}-
          {city.end.split("-").reverse().join(".")}
        </p>
      </div>
    </li>
  );
};
