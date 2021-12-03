import React, { useEffect, useRef, useState } from "react";
import { uid } from "../../util";
import styles from "./checkbox.module.scss";

const Checkbox = (props) => {
    const inputRef = useRef(null);
    const uniqueId = useRef(uid("cb-"));
    const [ isChecked, setIsChecked ] = useState(props.checked);
    const [ isIndeterminate, setIsIndeterminate ] = useState(props.indeterminate);

    const setIndeterminateDom = (state) => {
        // indeterminate state of checkbox can only be set imperatively
        if (inputRef.current) {
            inputRef.current.indeterminate = state;
        }
    }

    useEffect(() => {
        setIndeterminateDom(isIndeterminate);
    }, [isIndeterminate]);

    const handleInputChange = () => {
        if (props.isThreeState) {
           if (isChecked) {
               setIsIndeterminate(true);
               setIndeterminateDom(true);
               setIsChecked(false);
           } else if (isIndeterminate) {
               setIsIndeterminate(false);
               setIndeterminateDom(false);
           } else {
               setIsChecked(true);
           }
        } else {
            setIsChecked(!isChecked);
        }
        if (props.onChange) {
            props.onChange();
        }
    }
    return (
        <div className={styles.checkbox}>
            <input id={uniqueId.current} ref={inputRef} type="checkbox" checked={isChecked} disabled={props.disabled} onChange={handleInputChange} />
            <span className={styles.checkbox_visual}></span>
            <label for={uniqueId.current} className={styles.checkbox_text}>{props.children}</label>
        </div>
    );
}

Checkbox.defaultProps = {
    checked: false,
    isThreeState: false,
}

export { Checkbox };