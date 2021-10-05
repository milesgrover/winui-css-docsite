import React from "react";
import { Rating } from "..";
import styles from "../app/page-content.module.scss";

export const RatingPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default rating</h2>
                <Rating />
            </section>
            <section>
                <h2>Rating with placeholder value</h2>
                <Rating placeholderValue={4} />
            </section>
            <section>
                <h2>Rating with clear enabled</h2>
                <Rating placeholderValue={2.5} isClearEnabled />
            </section>
            <section>
                <h2>Readonly rating</h2>
                <Rating placeholderValue={3} isReadOnly />
            </section>
        </div>
    );
}