import React from "react";
import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles.conteiner}>
      <label>
        <input type="search" name="search" />
      </label>
    </div>
  );
};
