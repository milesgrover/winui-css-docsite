import React from "react";
import { TextBox } from "..";
import styles from "../app/page-content.module.scss";

export const TextBoxPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default text box</h2>
                <TextBox placeholder="Placeholder text" />
            </section>
            <section>
                <h2>Disabled text box</h2>
                <TextBox placeholder="Placeholder text" disabled />
            </section>
        </div>
    );
}