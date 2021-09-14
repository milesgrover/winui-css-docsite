import React from "react";
import styles from "./hyperlink.module.scss";

export const Hyperlink = ({href, subtle, ...props}) => {
    return (
        <a className={styles.hyperlink} href={href}>{props.children}</a>
    );
}