import React from "react";
import styles from "./button.module.scss";

export const Button = ({primary, className, ...props}) => {
    const getClassName = () => {
        const newClassName = [styles.button];
        if (primary) {
            newClassName.push(styles.button_primary);
        }
        if (props.disabled) {
            newClassName.push(styles.button_disabled);
        }
        if (className) {
            newClassName.push(className);
        }
        return newClassName.join(" ");
    }

    return (
        <button className={getClassName()} {...props} />
    );
}