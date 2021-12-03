import React, { useState } from "react";
import { Button, Dialog } from "..";
import styles from "../app/page-content.module.scss";

export const DialogPage = () => {
    const [showDialog1, setShowDialog1 ] = useState(false);
    const [showDialog2, setShowDialog2 ] = useState(false);
    const [showDialog3, setShowDialog3 ] = useState(false);
    const handleDialog1Click = () => {
        setShowDialog1(true);
    }
    const handleDialog1Primary = () => {
        console.log("primary clicked");
        setShowDialog1(false);
    }
    const handleDialog1Secondary = () => {
        console.log("secondary clicked");
        setShowDialog1(false);
    }
    const handleDialog1LightDismiss = () => {
        console.log("light dismiss clicked");
        setShowDialog1(false);
    }
    const handleDialog2Click = () => {
        setShowDialog2(true);
    }
    const handleDialog2Primary = () => {
        console.log("primary clicked");
        setShowDialog2(false);
    }
    const handleDialog2Secondary = () => {
        console.log("secondary clicked");
        setShowDialog2(false);
    }
    const handleDialog2LightDismiss = () => {
        console.log("light dismiss clicked");
        setShowDialog2(false);
    }
    const handleDialog3Click = () => {
        setShowDialog3(true);
    }
    const handleDialog3Primary = () => {
        console.log("primary clicked");
        setShowDialog3(false);
    }
    const handleDialog3Secondary = () => {
        console.log("secondary clicked");
        setShowDialog3(false);
    }
    const handleDialog3LightDismiss = () => {
        console.log("light dismiss clicked");
        setShowDialog3(false);
    }
    return (
        <div className={styles.page_content}>
            <section>
                <h2>Default dialog</h2>
                <Button onClick={handleDialog1Click}>Open dialog</Button>
                <Dialog
                    show={showDialog1}
                    title="Title Text"
                    primaryText="Yes"
                    secondaryText="No"
                    primaryOnClick={handleDialog1Primary}
                    secondaryOnClick={handleDialog1Secondary}
                    lightDismiss={handleDialog1LightDismiss}
                >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </Dialog>
            </section>
            <section>
                <h2>Maximum size dialog</h2>
                <Button onClick={handleDialog2Click}>Open dialog</Button>
                <Dialog
                    show={showDialog2}
                    title="Lorem Ipsum Dolor"
                    primaryText="Agree"
                    secondaryText="Cancel"
                    primaryOnClick={handleDialog2Primary}
                    secondaryOnClick={handleDialog2Secondary}
                    lightDismiss={handleDialog2LightDismiss}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu diam mi. Sed eu euismod lectus. Pellentesque a tellus pharetra, lobortis lacus vitae, aliquet quam.
                    </p>
                    <p>
                        Ut tempus finibus metus et viverra. Maecenas at massa blandit, fringilla urna consectetur, vestibulum lectus. 
                    </p>
                </Dialog>
            </section>
            <section>
                <h2>Minimum size dialog</h2>
                <Button onClick={handleDialog3Click}>Open dialog</Button>
                <Dialog
                    show={showDialog3}
                    // title="Minimal Title"
                    primaryText="OK"
                    secondaryText="Cancel"
                    primaryOnClick={handleDialog3Primary}
                    secondaryOnClick={handleDialog3Secondary}
                    lightDismiss={handleDialog3LightDismiss}
                >
                    Minimal text
                </Dialog>
            </section>
        </div>
    );
}