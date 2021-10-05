import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./toggle-switch.module.scss";

const ToggleSwitch = (props) => {
    const [ state, setState ] = useState(false);
    const stateText = state ? props.onContent : props.offContent;
    const handleClick = () => {
        if (!props.disabled) {
            setState(!state);
        }
    }
    useEffect(() => {
        if (props.defaultState) {
            setState(true);
        }
    }, [props.defaultState]);
    return (
        <div className={`${styles.toggle_switch} ${state ? styles.switch_on : ""} ${props.disabled ? styles.disabled : ""}`}>
            {props.header && <label className={styles.header}>{props.header}</label>}
            <button
                className={styles.switch}
                onClick={handleClick}
                disabled={props.disabled}
                tabIndex={props.showText !== "none" && !props.disabled ? 0 : -1}
            >
                {props.showText === "before" && <label className={styles.on_off}>{stateText}</label>}
                <div className={styles.switch_track} tabIndex={props.showText === "none" && !props.disabled ? 0 : null}>
                    <div className={styles.switch_thumb} />
                </div>
                {props.showText === "after" && <label className={styles.on_off}>{stateText}</label>}
            </button>
        </div>
    );
}

ToggleSwitch.propTypes = {
    header: PropTypes.string,
    showText: PropTypes.oneOf(["none", "before", "after"]),
    disabled: PropTypes.bool,
    defaultState: PropTypes.bool,
    onContent: PropTypes.string,
    offContent: PropTypes.string,
}

ToggleSwitch.defaultProps = {
    showText: "none",
    disabled: false,
    defaultState: false,
    onContent: "On",
    offContent: "Off",
}

export { ToggleSwitch };