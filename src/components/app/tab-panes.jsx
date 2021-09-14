import React, { useState } from "react";
import styles from "./tab-panes.module.scss";

export const Tab = (props) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.id)
        }
    }
    return (
        <div className={`${styles.tab_panes_tab} ${props.active ? "active" : ""}`} onClick={handleClick}>
            {props.children}
        </div>
    );
}

export const Pane = (props) => {
    if (props.active) {
        return (
            <div className={styles.tab_panes_pane}>
                {props.children}
            </div>
        );
    } else {
        return null;
    }
}

export const TabPanes = (props) => {
    const [ activeTabPane, setActiveTabPane ] = useState(props.defaultActive);
    const handleTabClick = (newActive) => {
        setActiveTabPane(newActive);
    }
    return (
        <div className={styles.tab_panes}>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {
                    onClick: handleTabClick,
                    active: activeTabPane === child.props.id
                })
            })}
        </div>
    );
}