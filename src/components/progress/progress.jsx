import React from "react";
import PropTypes from "prop-types";
import styles from "./progress.module.scss";

const Progress = (props) => {
    const renderProgressBar = () => {
        const hasValue = props.value !== undefined && props.value !== null;
        return (
            <div className={`${styles.progress_bar} ${hasValue ? "" : styles.indeterminate}`}>
                <span className={styles.fill} style={{width: hasValue ? props.value + "%" : null}}></span>
                {!hasValue && <span className={styles.fill2}></span>}
            </div>
        );
    }
    if (props.shape === "bar") {
        return renderProgressBar();
    } else if (props.shape === "ring") {
        return (
            <svg className={`${styles.progress_ring} ${styles[`ring_size_${props.ringSize}`]}`} viewBox="0 0 16 16">
                <circle
                    className={styles.stroke_circle}
                    cx="8px"
                    cy="8px"
                    r="7px"
                ></circle>
            </svg>
        );
    }
}

Progress.propTypes = {
    shape: PropTypes.oneOf(["bar", "ring"]),
    value: PropTypes.number,
    max: PropTypes.number,
    ringSize: PropTypes.oneOf([16, 32, 64]),
}

Progress.defaultProps = {
    shape: "bar",
    ringSize: 32,
}

export { Progress };