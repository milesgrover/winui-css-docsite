import React, { useEffect, useState } from "react";
import { Progress } from "..";
import styles from "../app/page-content.module.scss";

export const ProgressPage = () => {
    const [ detValue, setDetValue] = useState(0);
    const handleDetNumberChange = (e) => {
        setDetValue(e.target.value);
    }
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Determinate progress bar</h2>
                <Progress value={detValue} max={100} />
                <input type="number" min={0} max={100} onChange={handleDetNumberChange} />
            </section>
            <section>
                <h2>Indeterminate progress bar</h2>
                <Progress />
            </section>
            <section>
                <h2>Progress ring 16px</h2>
                <Progress shape="ring" ringSize={16} />
            </section>
            <section>
                <h2>Progress ring 32px</h2>
                <Progress shape="ring" ringSize={32} />
            </section>
            <section>
                <h2>Progress ring 64px</h2>
                <Progress shape="ring" ringSize={64} />
            </section>
        </div>
    );
}