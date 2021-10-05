import React from "react";
import { Slider } from "..";
import styles from "../app/page-content.module.scss";

export const SliderPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default slider</h2>
                <Slider />
            </section>
            <section>
                <h2>Slider with header</h2>
                <Slider header="Slider header" />
            </section>
            <section>
                <h2>Slider with ticks</h2>
                <Slider ticks step={10} />
            </section>
        </div>
    );
}