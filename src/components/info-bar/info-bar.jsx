import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Badge, Button, HyperlinkButton } from "..";
import styles from "./info-bar.module.scss";

const InfoBar = (props) => {
    const MIN_HEIGHT = 60; // 48 + 12 to account for action buttons
    const infoBarRef = useRef(null);
    const [ visible, setVisible ] = useState(true);
    const [ isMultiline, setIsMultiline ] = useState(false);

    useEffect(() => {
        const checkMultiline = () =>{ 
            if (infoBarRef.current) {
                const rect = infoBarRef.current.getBoundingClientRect();
                if (rect) {
                    if (rect.height <= MIN_HEIGHT) {
                        setIsMultiline(false);
                    } else {
                        setIsMultiline(true);
                    }
                }
            }
        }
        checkMultiline();
        window.addEventListener("resize", checkMultiline);
        return () => {
            window.removeEventListener("resize", checkMultiline);
        }
    }, []);
    const handleCloseClick = () => {
        setVisible(false);
        if (props.closeCallback) {
            props.closeCallback();
        }
    }
    const generateActionButton = () => {
        if (props.actionTitle) {
            const ActionButton = props.useHyperlink ? HyperlinkButton : Button;
            const handleActionClick = (e) => {
                if (props.useHyperlink) {
                    e.preventDefault();
                }
                if (props.actionCallback) {
                    props.actionCallback();
                }
            }
            return (
                <div className={`${styles.action} ${props.useHyperlink ? styles.hyperlink_action : ""}`}>
                    <ActionButton onClick={handleActionClick}>{props.actionTitle}</ActionButton>
                </div>
            );
        }
        return null;
    }
    const selectBadge = () => {
        if (props.severity === "informational") {
            return <Badge status="attention" icon="info" />;
        } else {
            return <Badge status={props.severity} />
        }
    }
    const generateClassName = () => {
        const className = [styles.info_bar];
        if (isMultiline) {
            className.push(styles.multiline);
        }
        if (props.severity !== "informational") {
            className.push(styles[`sev_${props.severity}`]);
        }
        return className.join(" ");
    }
    if (visible) {
        return (
            <div className={generateClassName()} ref={infoBarRef}>
                <div className={styles.grid}>
                    <div className={styles.badge}>
                        {selectBadge()}
                    </div>
                    <div className={styles.content}>
                        <span className={styles.title}>{props.title}</span>
                        <span className={styles.message}>{props.message}</span>
                        {generateActionButton()}
                    </div>
                    <div className={styles.close}>
                        <Button onClick={handleCloseClick} subtle iconOnly>{"\uE8BB"}</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

InfoBar.defaultProps = {
    severity: "informational",
    useHyperlink: false,
}

InfoBar.propTypes = {
    severity: PropTypes.oneOf(["informational", "success", "warning", "critical"]),
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    closeCallback: PropTypes.func,
    actionTitle: PropTypes.string,
    actionCallback: PropTypes.func,
    useHyperlink: PropTypes.bool
}

export { InfoBar };