import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./number-box.module.scss";

const NumberBox = (props) => {
    const [focused, setFocused] = useState(false);
    const [ value, setValue ] = useState(props.initialValue);
    const inputRef = useRef(null);
    const buttonDownTimer = useRef(null);

    const updateValue = (dir, step = props.smallChange) => {
        let dirMod = 1;
        if (dir === "down") {
            dirMod = -1;
        }
        setValue(value => {
            const newValue = +value + (step * dirMod);
            const gtMin = props.min !== undefined && props.min !== null ? newValue >= props.min : true;
            const ltMax = props.max !== undefined && props.max !== null ? newValue <= props.max : true;

            if (value === "") {
                return "0";
            } else if (gtMin && ltMax) {
                return newValue.toString();
            } else {
                return value
            }
        });
    }
    const updateAtInterval = (dir, step) => {
        buttonDownTimer.current = setInterval(() => {
            updateValue(dir, step);
        }, 100);
    }
    const cancelUpdateInterval = () => {
        clearInterval(buttonDownTimer.current);
        buttonDownTimer.current = null;
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const getControlsOffset = () => {
        let subtract = 0;
        if (props.spinnerMode === "inline") {
            subtract = 64;
        }
        if (props.spinnerMode === "compact" && !focused) {
            subtract = 16;
        }
        if (props.spinnerMode === "compact" && focused) {
            subtract = 80;
        }
        return subtract;
    }

    const handleFocus = () => {
        setFocused(true);
    }
    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;
        setTimeout(()=> {
            if (!currentTarget.contains(document.activeElement)) {
                setFocused(false);
            }
        }, 0);
    }
    const handleChevronDown = (dir) => {
        updateAtInterval(dir);
    }
    const handleChevronUp = () => {
        cancelUpdateInterval();
    }
    const handleChevronClick = (dir) => {
        updateValue(dir);
    }
    const handleInput = (e) => {
        cancelUpdateInterval();
        let rawValue = e.target.value;
        let newValue = +rawValue;
        const gtMax = props.max !== undefined && props.max !== null ? newValue > props.max : false;
        const ltMin = props.min !== undefined && props.min !== null ? newValue < props.min : false;

        if (rawValue === "") {
            setValue("");
        } else if (gtMax) {
            setValue(props.max);
        } else if (ltMin) {
            setValue(props.min);
        } else {
            setValue(rawValue);
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "PageUp" && !buttonDownTimer.current) {
            cancelUpdateInterval();
            updateAtInterval("up", props.largeChange);
        }
        if (e.key === "PageDown" && !buttonDownTimer.current) {
            cancelUpdateInterval();
            updateAtInterval("down", props.largeChange);
        }
    }
    const handleKeyUp = (e) => {
        if (e.key === "PageUp" || e.key === "PageDown") {
            cancelUpdateInterval();
        }
    }
    const handleClearClick = () => {
        setValue("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const IconChevronButton = ({direction = "up"}) => {
        return (
            <button className={styles[`chevron_button_${direction}`]} onFocus={handleFocus} onClick={() => handleChevronClick(direction)} onMouseDown={() => handleChevronDown(direction)} onMouseUp={handleChevronUp}>
                <svg className={styles[`chevron_${direction}`]} viewBox="0 0 13 7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.400391 6.5C0.400391 6.36458 0.44987 6.2474 0.548828 6.14844L6.04883 0.648438C6.14779 0.549479 6.26497 0.5 6.40039 0.5C6.53581 0.5 6.65299 0.549479 6.75195 0.648438L12.252 6.14844C12.3509 6.2474 12.4004 6.36458 12.4004 6.5C12.4004 6.63542 12.3509 6.7526 12.252 6.85156C12.153 6.95052 12.0358 7 11.9004 7C11.765 7 11.6478 6.95052 11.5488 6.85156L6.40039 1.71094L1.25195 6.85156C1.15299 6.95052 1.03581 7 0.900391 7C0.764974 7 0.647786 6.95052 0.548828 6.85156C0.44987 6.7526 0.400391 6.63542 0.400391 6.5Z" />
                </svg>
            </button>
        );
    }

    const IconClearButton = () => {
        return (
            <button className={styles.clear_button} onClick={handleClearClick}>
                <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5.70898L1.85352 8.85547C1.75586 8.95312 1.63867 9.00195 1.50195 9.00195C1.36133 9.00195 1.24219 8.95312 1.14453 8.85547C1.04688 8.75781 0.998047 8.63867 0.998047 8.49805C0.998047 8.36133 1.04688 8.24414 1.14453 8.14648L4.29102 5L1.14453 1.85352C1.04688 1.75586 0.998047 1.63672 0.998047 1.49609C0.998047 1.42578 1.01172 1.36133 1.03906 1.30273C1.06641 1.24023 1.10156 1.1875 1.14453 1.14453C1.19141 1.09766 1.24414 1.0625 1.30273 1.03906C1.36523 1.01172 1.43164 0.998047 1.50195 0.998047C1.63867 0.998047 1.75586 1.04688 1.85352 1.14453L5 4.29102L8.14648 1.14453C8.24414 1.04688 8.36133 0.998047 8.49805 0.998047C8.63867 0.998047 8.75781 1.04688 8.85547 1.14453C8.95312 1.24219 9.00195 1.36133 9.00195 1.50195C9.00195 1.63867 8.95312 1.75586 8.85547 1.85352L5.70898 5L8.85547 8.14648C8.95312 8.24414 9.00195 8.36328 9.00195 8.50391C9.00195 8.57422 8.98828 8.64062 8.96094 8.70312C8.93359 8.76172 8.89648 8.81445 8.84961 8.86133C8.80664 8.9043 8.75391 8.93945 8.69141 8.9668C8.63281 8.99023 8.56836 9.00195 8.49805 9.00195C8.36133 9.00195 8.24414 8.95312 8.14648 8.85547L5 5.70898Z" />
                </svg>

            </button>
        );
    }

    return (
        <div
        className={`${styles.number_box} ${focused ? styles.focused : ""} ${props.disabled ? styles.disabled : ""}`}
        onBlur={handleBlur}
        >
            {console.log(value)}
            <input
                ref={inputRef}
                type="number"
                value={value}
                onChange={handleInput}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                placeholder={props.placeholder}
                disabled={props.disabled}
                style={{width: `calc(100% - ${getControlsOffset()}px`}}
            />
            <span className={styles.width_shim} style={{marginRight: `${getControlsOffset()}px`}}>{value}</span>
            {!props.allowsExpression &&
                <div className={`${props.spinnerMode === "compact" ? styles.spinner_compact : styles.spinner_inline} ${focused ? styles.show_large : ""}`}>
                    <IconChevronButton />
                    <IconChevronButton direction="down" />
                </div>
            }
            {(props.allowsExpression || props.spinnerMode === "compact") && focused && 
                <IconClearButton />
            }
        </div>
    );
}

NumberBox.propTypes = {
    spinnerMode: PropTypes.oneOf(["compact", "inline"]),
    initialValue: PropTypes.number,
    allowsExpression: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    smallChange: PropTypes.number,
    largeChange: PropTypes.number,
}

NumberBox.defaultProps = {
    spinnerMode: "compact",
    initialValue: 0,
    allowsExpression: false,
    smallChange: 1,
    largeChange: 10,
}

export { NumberBox };