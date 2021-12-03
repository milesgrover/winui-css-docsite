import React from "react";
import PropTypes from "prop-types";
import styles from "./badge.module.scss";

const Badge = (props) => {
    const generateIcon = () => {
        let iconString = "";
        const iconDict = {
            info: "\uE625",
            asterisk: "\uEDAD",
            check: "\uE65F",
            important: "\uEDB1",
            error: "\uEDAE",
            mail: "\uEDB3",
            play: "\uEDB5",
            pause: "\uEDB4",
            ringer: "\uEDAC",
            sync: "\uEDAB",
        }
        const mapStatusToIcon = {
            info: iconDict.info,
            "info-safe": iconDict.info,
            attention: iconDict.asterisk,
            success: iconDict.check,
            caution: iconDict.important,
            critical: iconDict.error
        }
        if (props.icon) {
            iconString = iconDict[props.icon];
        } else {
            iconString = mapStatusToIcon[props.status];
        }
        return iconString;
    }
    return (
        <div className={`${styles.badge} ${styles[`status_${props.status}`]}`}>
            {props.value && <span className={styles.value}>{props.value}</span>}
            {!props.value && <span className={styles.icon}>{generateIcon()}</span>}
        </div>
    );
}

Badge.defaultProps = {
    status: "info",
}

Badge.propTypes = {
    icon: PropTypes.oneOf(["info", "asterisk", "check", "important", "error", "mail", "play", "pause", "ringer", "sync"]),
    status: PropTypes.oneOf(["info", "info-safe", "attention", "success", "caution", "critical"]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export { Badge };