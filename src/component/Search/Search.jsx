"use client";

import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import Image from "next/image";

export const Search = ({ search }) => {
  const [allTrips, setAllTrips] = useState();
  const [searchTrip, setSearchTrip] = useState();

  useEffect(() => {
    const getTrips = localStorage.getItem("trip");
    if (getTrips) {
      const parseTrips = JSON.parse(getTrips);
      setAllTrips(parseTrips);
    }
  }, [searchTrip]);

  const onSearch = (e) => {
    const searchWord = e.target.value;
    const word = searchWord.toLowerCase();
    const searchCity = allTrips?.filter((item) =>
      item.city.toLowerCase().includes(word)
    );
    setSearchTrip(searchCity);
    search(searchCity);
  };

  return (
    <div className={styles.conteiner}>
      <label>
        <input
          className={styles.input}
          onChange={onSearch}
          placeholder="Search your trip"
          type="search"
          name="search"
        />
        <Image
          className={styles.icon}
          src="/search.svg"
          alt="search icon"
          width={20}
          height={20}
        />
      </label>
    </div>
  );
};
