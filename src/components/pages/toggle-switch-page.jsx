import React from "react";
import { ToggleSwitch } from "..";
import styles from "../app/page-content.module.scss";

export const ToggleSwitchPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default toggle switch</h2>
                <ToggleSwitch />
            </section>
            <section>
                <h2>Toggle switch with text before</h2>
                <ToggleSwitch showText="before" />
            </section>
            <section>
                <h2>Toggle switch with text after</h2>
                <ToggleSwitch showText="after" />
            </section>
            <section>
                <h2>Toggle switch with custom on/off text</h2>
                <ToggleSwitch showText="after" onContent="True" offContent="False" />
            </section>
            <section>
                <h2>Toggle switch with header</h2>
                <ToggleSwitch header="Toggle switch header" />
            </section>
            <section>
                <h2>Toggle switch defaulted to on</h2>
                <ToggleSwitch defaultState={true} />
            </section>
            <section>
                <h2>Disabled toggle switch</h2>
                <ToggleSwitch disabled />
            </section>
        </div>
    );
}