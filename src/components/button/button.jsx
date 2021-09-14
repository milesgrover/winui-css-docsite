import React from "react";
import styles from "./button.module.scss";

export const Button = ({primary, ...props}) => {
    const getClassName = () => {
        const newClassName = [styles.button];
        if (primary) {
            newClassName.push(styles.button_primary);
        }
        if (props.disabled) {
            newClassName.push(styles.button_disabled);
        }
        return newClassName.join(" ");
    }
    return (
        <button className={getClassName()} {...props} />
    );
}