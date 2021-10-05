import React from "react";
import styles from "./hyperlink.module.scss";

export const Hyperlink = ({href, subtle, disabled, ...props}) => {
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
        }
    }
    return (
        <a className={styles.hyperlink} href={href || "#"} disabled={disabled} onClick={handleClick}>{props.children}</a>
    );
}