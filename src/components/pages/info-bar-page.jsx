import React from "react";
import { InfoBar } from "..";
import styles from "../app/page-content.module.scss";

export const InfoBarPage = () => {
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Informational info bar</h2>
                <InfoBar title="Title" message="A short message" />
                <InfoBar title="Title" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque orci, tempor nec volutpat sed, lobortis et eros. Sed eu vulputate erat. Vivamus in porta dui. Integer vulputate nibh eu cursus ornare. Vivamus neque orci, tempor nec volutpat sed, lobortis et eros. Sed eu vulputate erat. Vivamus in porta dui." />
                <InfoBar
                    title="Title"
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque orci, tempor nec volutpat sed, lobortis et eros. Sed eu vulputate erat. Vivamus in porta dui. Integer vulputate nibh eu cursus ornare. Vivamus neque orci, tempor nec volutpat sed, lobortis et eros. Sed eu vulputate erat. Vivamus in porta dui."
                    actionTitle="An action"
                    actionCallback={() => console.log("action")}
                    useHyperlink
                />
                <InfoBar
                    title="Title"
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque orci, tempor nec volutpat sed, lobortis et eros. Sed eu vulputate erat. Vivamus in porta dui. Integer vulputate nibh eu cursus ornare. Vivamus neque orci, tempor nec volutpat sed, lobortis et eros. Sed eu vulputate erat. Vivamus in porta dui."
                    actionTitle="An action"
                    actionCallback={() => console.log("action")}
                />
                <InfoBar title="Title" message="A short message" actionTitle="Action" actionCallback={() => console.log("action")} />
                <InfoBar title="Title" message="A short message" useHyperlink actionTitle="Action" actionCallback={() => console.log("action")} />
            </section>
            <section>
                <h2>Success info bar</h2>
                <InfoBar severity="success" title="Title" message="A short message" />
                <InfoBar severity="success" title="Title" message="A short message" actionTitle="Action" actionCallback={() => console.log("action")} />
            </section>
            <section>
                <h2>Caution info bar</h2>
                <InfoBar severity="caution" title="Title" message="A short message" />
                <InfoBar severity="caution" title="Title" message="A short message" actionTitle="Action" actionCallback={() => console.log("action")} />
            </section>
            <section>
                <h2>Critical info bar</h2>
                <InfoBar severity="critical" title="Title" message="A short message" />
                <InfoBar severity="critical" title="Title" message="A short message" actionTitle="Action" actionCallback={() => console.log("action")} />
            </section>
        </div>
    );
}