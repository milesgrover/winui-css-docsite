import React from "react";
import styles from "./rating.module.scss";

export const RatingStar = (props) => {
    const StarIcon = () => {
        return (
            <React.Fragment>
                <span className={styles.icon_outline}>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.71875 10.1406L0.164062 6.67969C0.0651042 6.58073 0.015625 6.46354 0.015625 6.32812C0.015625 6.20833 0.0572917 6.09896 0.140625 6C0.223958 5.90104 0.325521 5.84115 0.445312 5.82031L5.35156 5.10938L7.55469 0.65625C7.59635 0.572917 7.65885 0.507812 7.74219 0.460938C7.82552 0.408854 7.91146 0.382812 8 0.382812C8.08854 0.382812 8.17448 0.408854 8.25781 0.460938C8.34115 0.507812 8.40365 0.572917 8.44531 0.65625L10.6484 5.10938L15.5547 5.82031C15.6797 5.84115 15.7812 5.89844 15.8594 5.99219C15.9427 6.08594 15.9844 6.19531 15.9844 6.32031C15.9844 6.46094 15.9349 6.58073 15.8359 6.67969L12.2812 10.1406L13.1172 15.0312C13.1224 15.0521 13.125 15.0807 13.125 15.1172C13.125 15.2526 13.0755 15.3698 12.9766 15.4688C12.8776 15.5677 12.7604 15.6172 12.625 15.6172C12.5365 15.6172 12.4583 15.599 12.3906 15.5625L8 13.25L3.60938 15.5625C3.54167 15.599 3.46354 15.6172 3.375 15.6172C3.23958 15.6172 3.1224 15.5677 3.02344 15.4688C2.92448 15.3698 2.875 15.2526 2.875 15.1172C2.875 15.0807 2.8776 15.0521 2.88281 15.0312L3.71875 10.1406ZM4.03906 14.2031L8 12.1172L11.9609 14.2031C11.8359 13.4635 11.7109 12.7292 11.5859 12C11.4661 11.2656 11.3385 10.5286 11.2031 9.78906L14.4141 6.66406L9.98438 6.02344C9.64583 5.35156 9.3125 4.68229 8.98438 4.01562C8.66146 3.34896 8.33333 2.67969 8 2.00781C7.66667 2.67969 7.33594 3.34896 7.00781 4.01562C6.6849 4.68229 6.35417 5.35156 6.01562 6.02344L1.58594 6.66406L4.79688 9.78906C4.66146 10.5286 4.53125 11.2656 4.40625 12C4.28646 12.7292 4.16406 13.4635 4.03906 14.2031Z" />
                    </svg>
                </span>
                <span className={styles.icon_fill}>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 15.625C3.23958 15.625 3.1224 15.5755 3.02344 15.4766C2.92448 15.3724 2.875 15.2526 2.875 15.1172C2.875 15.0807 2.8776 15.0521 2.88281 15.0312L3.71875 10.1406L0.164062 6.67969C0.0651042 6.58073 0.015625 6.46354 0.015625 6.32812C0.015625 6.20833 0.0572917 6.09896 0.140625 6C0.223958 5.90104 0.325521 5.84115 0.445312 5.82031L5.35156 5.10938L7.55469 0.65625C7.59635 0.572917 7.65625 0.507812 7.73438 0.460938C7.81771 0.408854 7.90365 0.382812 7.99219 0.382812C8.08594 0.382812 8.17448 0.40625 8.25781 0.453125C8.34115 0.5 8.40365 0.567708 8.44531 0.65625L10.6484 5.10938L15.5547 5.82031C15.6797 5.84115 15.7812 5.89844 15.8594 5.99219C15.9427 6.08594 15.9844 6.19531 15.9844 6.32031C15.9844 6.46615 15.9349 6.58594 15.8359 6.67969L12.2812 10.1406L13.1172 15.0312C13.1224 15.0521 13.125 15.0807 13.125 15.1172C13.125 15.2526 13.0755 15.3698 12.9766 15.4688C12.8776 15.5677 12.7604 15.6172 12.625 15.6172C12.5365 15.6172 12.4583 15.599 12.3906 15.5625L8 13.25L3.60938 15.5625C3.53646 15.6042 3.45833 15.625 3.375 15.625Z" />
                    </svg>
                </span>
            </React.Fragment>
        );
    }
    const generateClassName = () => {
        const className = [styles.rating_star];
        if (props.fill === 1) {
            className.push(styles.icon_full);
        } else if (props.fill === 0.5) {
            className.push(styles.icon_half);
        }
        if (props.isPlaceholder) {
            className.push(styles.is_placeholder);
        }
        return className.join(" ");
    }
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.id)
        }
    }
    return (
        <button className={generateClassName()} onClick={handleClick} disabled={props.disabled}>
            <StarIcon />
        </button>
    )
}