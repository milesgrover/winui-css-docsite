import React, { useEffect, useRef, useState } from "react";
import { uid } from "../../util";
import styles from "./checkbox.module.scss";

const Checkbox = (props) => {
    const inputRef = useRef(null);
    const uniqueId = useRef(uid("cb-"));
    const [ isChecked, setIsChecked ] = useState(props.checked);
    useEffect(() => {
        if (inputRef.current) {
            if (props.indeterminate) {
                inputRef.current.indeterminate = true;
            } else {
                inputRef.current.indeterminate = false;
            }
        }
    })
    const generateCheck = () => {
        if (props.indeterminate) {
            return (
                <svg className={styles.indeterminate} viewBox="0 0 8 2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.501953 1.49805C0.431641 1.49805 0.365234 1.48633 0.302734 1.46289C0.244141 1.43555 0.191406 1.40039 0.144531 1.35742C0.101562 1.31055 0.0664062 1.25781 0.0390625 1.19922C0.0117188 1.13672 -0.00195312 1.07031 -0.00195312 1C-0.00195312 0.929688 0.0117188 0.865234 0.0390625 0.806641C0.0664062 0.744141 0.101562 0.691406 0.144531 0.648438C0.191406 0.601562 0.244141 0.566406 0.302734 0.542969C0.365234 0.515625 0.431641 0.501953 0.501953 0.501953H7.49805C7.56836 0.501953 7.63281 0.515625 7.69141 0.542969C7.75391 0.566406 7.80664 0.601562 7.84961 0.648438C7.89648 0.691406 7.93359 0.744141 7.96094 0.806641C7.98828 0.865234 8.00195 0.929688 8.00195 1C8.00195 1.07031 7.98828 1.13672 7.96094 1.19922C7.93359 1.25781 7.89648 1.31055 7.84961 1.35742C7.80664 1.40039 7.75391 1.43555 7.69141 1.46289C7.63281 1.48633 7.56836 1.49805 7.49805 1.49805H0.501953Z"/>
                </svg>
            );
        } else {
            return (
                <svg className={styles.check} viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.00195312 3.49805C0.00195312 3.36133 0.0507812 3.24414 0.148438 3.14648C0.246094 3.04883 0.363281 3 0.5 3C0.636719 3 0.753906 3.04883 0.851562 3.14648L3.5 5.79492L9.14844 0.146484C9.24609 0.0488281 9.36328 0 9.5 0C9.57031 0 9.63477 0.0136719 9.69336 0.0410156C9.75586 0.0644531 9.80859 0.0996094 9.85156 0.146484C9.89844 0.189453 9.93555 0.242187 9.96289 0.304688C9.99023 0.363281 10.0039 0.427734 10.0039 0.498047C10.0039 0.634766 9.95312 0.753906 9.85156 0.855469L3.85156 6.85547C3.75391 6.95312 3.63672 7.00195 3.5 7.00195C3.36328 7.00195 3.24609 6.95312 3.14844 6.85547L0.148438 3.85547C0.0507812 3.75781 0.00195312 3.63867 0.00195312 3.49805Z" stroke="currentColor" stroke-width="1" />
                </svg>
            );
        }
    }
    const handleInputChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div className={styles.checkbox}>
            <input id={uniqueId.current} ref={inputRef} type="checkbox" checked={isChecked} disabled={props.disabled} onChange={handleInputChange} />
            <span className={styles.checkbox_visual}>
                {generateCheck()}
            </span>
            <label for={uniqueId.current} className={styles.checkbox_text}>{props.children}</label>
        </div>
    );
}

Checkbox.defaultProps = {
    checked: false,
}

export { Checkbox };