import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ close, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => close()}>
          X
        </div>
        {children}
      </div>
    </div>
  );
};
