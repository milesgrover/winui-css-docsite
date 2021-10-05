import React from "react";
import { HyperlinkButton } from "..";
import styles from "../app/page-content.module.scss";

export const HyperlinkButtonPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default hyperlink button</h2>
                <HyperlinkButton>Sample hyperlink button</HyperlinkButton>
            </section>
            <section>
                <h2>Disabled hyperlink button</h2>
                <HyperlinkButton disabled>Sample hyperlink button</HyperlinkButton>
            </section>
        </div>
    );
}