import React, { useEffect, useState } from "react";
import { Button } from "../../components";
import { Redirect } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = ({onThemeClick}) => {
    const [redirect, setRedirect ] = useState(false);
    const handleHeadingClick = () => {
        setRedirect(true);

    }
    useEffect(() => {
        if (redirect) {
            // reset redirect after redirecting
            setRedirect(false);
        }
    }, [redirect]);
    return (
        <header className={styles.header}>
            {redirect && <Redirect to="/" />}
            <h1 className={styles.header_heading} onClick={handleHeadingClick}>
                WinUI for Web Documentation
            </h1>
            <Button onClick={onThemeClick} primary>Swap theme</Button>
        </header>
    );
}