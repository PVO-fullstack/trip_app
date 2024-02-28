import React from "react";
import styles from "./Modal.module.css";
import { Close } from "../Svg/Close/Close";
import { Button } from "../Button/Button";

export const Modal = ({ close, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <p>Create trip</p>
          <Close
            className={styles.close}
            size={10}
            color={"#7E7E7E"}
            click={() => close()}
          />
        </div>
        {children}
        <div className={styles.btn_conteiner}>
          <Button
            className={styles.cancel}
            click={() => close()}
            type={"button"}
            name={"Cancel"}
          />
          <Button
            form="form"
            className={styles.save}
            type={"submit"}
            name={"Save"}
          />
        </div>
      </div>
    </div>
  );
};
