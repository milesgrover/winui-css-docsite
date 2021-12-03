import React from "react";
import { PersonPicture } from "..";
import styles from "../app/page-content.module.scss";

export const PersonPicturePage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default person picture</h2>
                <PersonPicture />
            </section>
        </div>
    );
}