import React from "react";
import { Button } from "..";
import styles from "../app/page-content.module.scss";

export const ButtonPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default button</h2>
                <Button>Sample button</Button>
            </section>
            <section>
                <h2>Primary button</h2>
                <Button primary>Sample button</Button>
            </section>
            <section>
                <h2>Disabled button</h2>
                <Button disabled>Sample button</Button>
            </section>
            <section>
                <h2>Disabled primary button</h2>
                <Button primary disabled>Sample button</Button>
            </section>
        </div>
    );
}