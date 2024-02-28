import React from "react";
import styles from "./Button.module.css";

export const Button = ({ type, disabled, name, className, click, form }) => {
  return (
    <button
      form={form}
      onClick={click}
      className={styles.btn + " " + className}
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
