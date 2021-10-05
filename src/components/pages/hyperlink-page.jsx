import React from "react";
import { Hyperlink } from "..";
import styles from "../app/page-content.module.scss";

export const HyperlinkPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default hyperlink</h2>
                <Hyperlink>Sample hyperlink</Hyperlink>
            </section>
            <section>
                <h2>Disabled hyperlink</h2>
                <Hyperlink disabled>Sample hyperlink</Hyperlink>
            </section>
        </div>
    );
}