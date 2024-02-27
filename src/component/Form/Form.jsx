"use client";

import React, { useState } from "react";
import { InputSelect } from "../InputSelect/InputSelect";
import { InputDate } from "../InputDate/InputDate";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";
import { cityImg } from "@/js/cityImg";

export const Form = ({ close }) => {
  const submit = (e) => {
    // const [startDay, setStartDay] = useState();

    e.preventDefault();
    const city = e.target.city.value;
    const start = e.target.start.value;
    // setStartDay(start);
    const end = e.target.end.value;
    const img = cityImg(city);
    const trip = [{ city: city, start: start, end: end, img: img }];
    const trips = localStorage.getItem("trip");
    if (trips) {
      const parseTrips = JSON.parse(trips);
      localStorage.setItem("trip", JSON.stringify([...parseTrips, ...trip]));
      close();
      return;
    }
    localStorage.setItem("trip", JSON.stringify(trip));
    close();
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <InputSelect title={"City"} />
      <InputDate title={"Start date"} name={"start"} />
      <InputDate title={"End date"} name={"end"} />
      <div className={styles.btn_conteiner}>
        <Button
          className={styles.cancel}
          click={() => close()}
          type={"button"}
          name={"Cancel"}
        />
        <Button className={styles.save} type={"submit"} name={"Save"} />
      </div>
    </form>
  );
};
