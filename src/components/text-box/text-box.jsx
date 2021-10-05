import React, { useState } from "react";
import styles from "./text-box.module.scss";

export const TextBox = (props) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => {
        setFocused(true);
    }
    const handleBlur = () => {
        setFocused(false);
    }
    return (
        <div className={`${styles.text_box} ${focused ? styles.focused : ""} ${props.disabled ? styles.disabled : ""}`}>
            <input type={props.type || "text"} onFocus={handleFocus} onBlur={handleBlur} placeholder={props.placeholder} disabled={props.disabled} />
        </div>
    );
}