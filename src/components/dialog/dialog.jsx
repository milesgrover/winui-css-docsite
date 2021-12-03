import React from "react";
import { Button } from "..";
import styles from "./dialog.module.scss";

export const Dialog = (props) => {
    if (props.show) {
        return (
            <div className={styles.smoke_layer} onClick={props.lightDismiss}>
                <div className={styles.dialog_box}>
                    <div className={styles.content}>
                        {props.title && <h1 className={styles.title}>{props.title}</h1>}
                        {props.children}
                    </div>
                    <div className={styles.button_container}>
                        {props.primaryText && <Button primary onClick={props.primaryOnClick}>{props.primaryText}</Button>}
                        {props.secondaryText && <Button onClick={props.secondaryOnClick}>{props.secondaryText}</Button>}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}