import React from "react";
import { uid } from "../../util";
import styles from "./radio-group.module.scss";

export const RadioGroup = (props) => {
    const groupChildren = () => {
        return React.Children.map(props.children, child => {
            return React.cloneElement(child, {
                name: props.name,
                id: uid("rb-"),
            });
        });
    }
    return (
        <div className={styles.radio_group}>
            {groupChildren()}
        </div>
    );
}