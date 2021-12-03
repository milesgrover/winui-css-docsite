import React from "react";
import styles from "./acrylic.module.scss";

export const Acrylic = (props) => {
    return (
        <div className={styles.acrylic}>
            <div className={styles.acrylicBlurTint} />
            <div className={styles.acrylicNoise} />
        </div>
    );
}