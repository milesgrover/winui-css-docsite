import React, { useState } from "react";
import styles from "./split-button.module.scss";
import buttonStyles from "../button/button.module.scss";
import { ContextMenu } from "..";

export const SplitButton = (props) => {
    const [ showMenu, setShowMenu ] = useState(false);
    const handleSplitClick = () => {
        setShowMenu(!showMenu);
    }
    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;
        setTimeout(()=> {
            if (!currentTarget.contains(document.activeElement)) {
                setShowMenu(false);
            }
        }, 0);
    }
    return (
        <div className={styles.split_button} onBlur={handleBlur}>
            <button className={buttonStyles.button} {...props}></button>
            <button className={`${buttonStyles.button} ${styles.button}`} onClick={handleSplitClick}>&#xe972;</button>
            <ContextMenu
                show={showMenu}
                offset={{x: "center", y: "32px"}}
                items={props.menuItems}
            />
        </div>
    );
}