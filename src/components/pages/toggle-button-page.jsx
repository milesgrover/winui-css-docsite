import React from "react";
import { ToggleButton } from "..";
import styles from "../app/page-content.module.scss";

export const ToggleButtonPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default toggle button</h2>
                <ToggleButton>Sample ToggleButton</ToggleButton>
            </section>
        </div>
    );
}