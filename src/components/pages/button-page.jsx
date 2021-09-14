import React from "react";
import { Button } from "../../components";
import styles from "../app/page-content.module.scss";

export const ButtonPage = () => {
    return (
        <div className={styles.page_content}>
            <Button>Sample button</Button>
            <Button primary>Sample button</Button>
            <Button disabled>Sample button</Button>
            <Button primary disabled>Sample button</Button>
        </div>
    );
}