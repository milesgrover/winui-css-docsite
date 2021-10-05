import React from "react";
import { RadioButton, RadioGroup } from "..";
import styles from "../app/page-content.module.scss";

export const RadioPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default radio group</h2>
                <RadioGroup name="myGroup">
                    <RadioButton>Sample option 1</RadioButton>
                    <RadioButton>Sample option 2</RadioButton>
                    <RadioButton>Sample option 3</RadioButton>
                </RadioGroup>
            </section>
            <section>
                <h2>Radio group with disabled option</h2>
                <RadioGroup name="myGroup2">
                    <RadioButton>Sample option 1</RadioButton>
                    <RadioButton disabled>Sample option 2</RadioButton>
                    <RadioButton>Sample option 3</RadioButton>
                </RadioGroup>
            </section>
        </div>
    );
}