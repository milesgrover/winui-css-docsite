import React, { useState } from "react";
import PropTypes from "prop-types";
import { RatingStar } from ".";
import styles from "./rating.module.scss";

const Rating = (props) => {
    const [ ratingAmt, setRatingAmt ] = useState(props.placeholderValue || 0);
    const [ userSelected, setUserSelected ] = useState(false);
    const [ showClear, setShowClear ] = useState(false);
    const generateStars = () => {
        const ratings = [];
        for (let i = 0; i < 5; i++) {
            let fill = i < ratingAmt ? 1 : 0;
            if (ratingAmt - i > 0 && ratingAmt - i < 1) {
                fill = 0.5;
            }
            ratings.push(
                <RatingStar
                    id={i}
                    onClick={handleStarClick}
                    fill={fill}
                    isPlaceholder={!userSelected}
                    disabled={props.isReadOnly}
                />
            )
        }
        return ratings;
    }
    const handleStarClick = (id) => {
        if (ratingAmt !== id + 1) {
            setUserSelected(true);
            setRatingAmt(id + 1);
            setShowClear(false);
        } else {
            if (props.isClearEnabled) {
                setUserSelected(false);
                setRatingAmt(props.placeholderValue || 0);
                setShowClear(true);
            }
        }
    }
    const handleMouseOut = () => {
        setShowClear(false);
    }
    return (
        <div className={`${styles.rating} ${showClear ? styles.clear : ""}`} onMouseOut={handleMouseOut}>
                {generateStars()}
            {props.label && <label>{props.label}</label>}
        </div>
    );
}

Rating.defaultProps = {
    isReadOnly: false,
    isClearEnabled: false,
}

Rating.propTypes = {
    placeholderValue: PropTypes.number,
    isReadOnly: PropTypes.bool,
    isClearEnabled: PropTypes.bool,
    label: PropTypes.string,
}

export { Rating };