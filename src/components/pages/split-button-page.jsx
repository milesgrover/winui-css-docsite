import React from "react";
import { SplitButton } from "..";
import styles from "../app/page-content.module.scss";

export const SplitButtonPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default split button</h2>
                <SplitButton menuItems={
                    [
                        {
                            text: "Sample option 1",
                            onClick: () => console.log("test"),
                        },
                        {
                            text: "Sample option 2",
                            onClick: () => console.log("test"),
                        },
                        {
                            text: "Sample option 3",
                            onClick: () => console.log("test"),
                        },
                    ]
                }>Text</SplitButton>
            </section>
        </div>
    );
}