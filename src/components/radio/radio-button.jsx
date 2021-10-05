import React from "react";
import styles from "./radio-button.module.scss";

export const RadioButton = (props) => {
    return (
        <div className={styles.radio_button}>
            <input type="radio" name={props.name} id={props.id} disabled={props.disabled} />
            <div className={styles.radio_button_visual} />
            <label for={props.id} className={styles.radio_button_text}>{props.children}</label>
        </div>
    );
}