import React from "react";
import styles from "./page-layout.module.scss";

export const PageLayout = (props) => {
    return (
        <div className={styles.page_layout}>
            {props.children}
        </div>
    );
}