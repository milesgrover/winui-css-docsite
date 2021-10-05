import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.scss";

const Slider = (props) => {
    const THUMB_WIDTH = 20;
    const inputRef = useRef(null);
    const [ thumbPosition, setThumbPosition ] = useState(0);

    useEffect(()=>{
        if(inputRef.current) {
            let val = props.value;
            if (val === undefined || val === null) {
                val = props.min + (props.max / 2);
            }
            const calcThumbPos = val / props.max * 100;
            setThumbPosition(calcThumbPos);
        }
    }, [])

    const handleInput = () => {
        if (inputRef.current) {
            const val = inputRef.current.value;
            const calcThumbPos = val / props.max * 100;
            setThumbPosition(calcThumbPos)
        }
    }

    const generateTicks = () => {
        if (props.ticks) {
            const makeTicks = [];
            for (let i = props.min; i <= props.max; i += props.step) {
                makeTicks.push(<span className={styles.tick}></span>)
            }
            return <div className={styles.tick_container}>{makeTicks}</div>
        }
        return null;
    }

    return (
        <div className={styles.slider}>
            {props.header && <label className={styles.header}>{props.header}</label>}
            <div className={styles.slider_container}>
                <div className={styles.thumb} style={{left: `calc(${thumbPosition}% - ${(thumbPosition / 100) * THUMB_WIDTH}px)`}} />
                <div className={styles.fill} style={{width: `${thumbPosition}%`}} />
                <input type="range" ref={inputRef} onInput={handleInput} />
                {generateTicks()}
            </div>
        </div>
    )
}

Slider.propTypes = {
    ticks: PropTypes.bool,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    header: PropTypes.string,
}

Slider.defaultProps = {
    ticks: false,
    step: 1,
    min: 0,
    max: 100,
}

export { Slider };