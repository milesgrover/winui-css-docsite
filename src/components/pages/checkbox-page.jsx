import React from "react";
import { Checkbox } from "..";
import styles from "../app/page-content.module.scss";

export const CheckboxPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default checkbox</h2>
                <Checkbox>Sample checkbox</Checkbox>
            </section>
            <section>
                <h2>Pre-checked checkbox</h2>
                <Checkbox checked>Sample checkbox</Checkbox>
            </section>
            <section>
                <h2>Disabled checkbox</h2>
                <Checkbox disabled>Sample checkbox</Checkbox>
            </section>
            <section>
                <h2>Disabled, checked checkbox</h2>
                <Checkbox checked disabled>Sample checkbox</Checkbox>
            </section>
            <section>
                <h2>Indeterminate checkbox</h2>
                <Checkbox isThreeState indeterminate>Sample checkbox</Checkbox>
            </section>
            <section>
                <h2>Disabled indeterminate checkbox</h2>
                <Checkbox indeterminate disabled>Sample checkbox</Checkbox>
            </section>
        </div>
    );
}