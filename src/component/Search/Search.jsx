"use client";

import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

export const Search = ({ search }) => {
  const [allTrips, setAllTrips] = useState();
  const [searchTrip, setSearchTrip] = useState();

  useEffect(() => {
    const getTrips = localStorage.getItem("trip");
    if (getTrips) {
      const parseTrips = JSON.parse(getTrips);
      setAllTrips(parseTrips);
    }
  }, []);

  const onSearch = (e) => {
    const searchWord = e.target.value;
    const word = searchWord.toLowerCase();
    const searchCity = allTrips.filter((item) =>
      item.city.toLowerCase().includes(word)
    );
    search(searchCity);
  };

  return (
    <div className={styles.conteiner}>
      <label>
        <input
          onChange={onSearch}
          placeholder="Search your trip"
          type="search"
          name="search"
        />
      </label>
    </div>
  );
};
