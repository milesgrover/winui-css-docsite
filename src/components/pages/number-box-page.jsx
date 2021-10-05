import React from "react";
import { NumberBox } from "..";
import styles from "../app/page-content.module.scss";

export const NumberBoxPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default number box</h2>
                <NumberBox />
            </section>
            <section>
                <h2>Disabled number box</h2>
                <NumberBox disabled />
            </section>
            <section>
                <h2>Inline spinner number box</h2>
                <NumberBox spinnerMode="inline" />
            </section>
            <section>
                <h2>Number box with min (0) and max (100)</h2>
                <NumberBox min={0} max={100} />
            </section>
            <section>
                <h2>Number box with small change (10) and large change (100)</h2>
                <NumberBox smallChange={10} largeChange={100} />
            </section>
        </div>
    );
}