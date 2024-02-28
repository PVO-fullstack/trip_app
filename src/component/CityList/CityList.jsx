"use client";

import React, { useEffect, useState } from "react";
import { CityCard } from "../CityCard/CityCard";
import styles from "./CityList.module.css";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

const exampleTrip = [
  { city: "Kyiv", start: "2024-06-03", end: "2024-06-10", img: "/kyiv.jpeg" },
];

export const CityList = ({ click, active, city }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allTrips, setAllTrips] = useState();
  const [trips, setTrips] = useState();
  const [firstTrip, setFirstTrip] = useState(0);
  const [nextBtnDisable, setNextBtnDisable] = useState(false);
  const [prevBtnDisable, setPrevBtnDisable] = useState(true);
  const [isBtn, setIsBtn] = useState(false);

  useEffect(() => {
    const getTrips = localStorage.getItem("trip");
    if (getTrips) {
      const qwe = JSON.parse(getTrips);
      const parseTrips = qwe.sort(
        (a, b) => new Date(a.start) - new Date(b.start)
      );
      console.log("parseTrips", parseTrips);
      setAllTrips(parseTrips);
      if (parseTrips.length > 3) {
        setIsBtn(true);
        const firstTrips = parseTrips.slice(firstTrip, firstTrip + 3);
        setTrips(firstTrips);
        return;
      }
      setTrips(parseTrips);
      return;
    }
    setTrips(exampleTrip);
    localStorage.setItem("trip", JSON.stringify(exampleTrip));
  }, [isOpen, firstTrip]);

  useEffect(() => {
    console.log("city2", city);
    if (city) {
      if (city.length > 3) {
        setIsBtn(true);
        const firstTrips = city.slice(firstTrip, firstTrip + 3);
        setTrips(firstTrips);
        return;
      }
      setTrips(city);
    }
  }, [city]);

  console.log("city", city);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNextBtnClick = () => {
    setFirstTrip(firstTrip + 1);
    setPrevBtnDisable(false);
    if (firstTrip === allTrips.length - 4) {
      setNextBtnDisable(true);
      return;
    }
  };

  const handlePrevBtnClick = () => {
    setFirstTrip(firstTrip - 1);
    setNextBtnDisable(false);
    if (firstTrip === 1) {
      setPrevBtnDisable(true);
      return;
    }
  };

  return (
    <>
      <ul className={styles.conteiner}>
        {trips?.length > 0 ? (
          trips.map((city) => (
            <CityCard
              active={active}
              click={click}
              key={city.city}
              city={city}
            />
          ))
        ) : (
          <>Loading...</>
        )}
        <div className={styles.add}>
          <p className={styles.plus} onClick={handleClick}>
            +
          </p>
          <p>Add trip</p>
        </div>
        {isOpen && (
          <Modal close={handleClose}>
            <Form close={handleClose} />
          </Modal>
        )}
      </ul>
      {isBtn && (
        <div className={styles.btn_conteiner}>
          <Button
            className={styles.btn}
            disabled={prevBtnDisable}
            click={handlePrevBtnClick}
            type={"button"}
            name={"Prev"}
          />
          <Button
            className={styles.btn}
            disabled={nextBtnDisable}
            click={handleNextBtnClick}
            type={"button"}
            name={"Next"}
          />
        </div>
      )}
    </>
  );
};
