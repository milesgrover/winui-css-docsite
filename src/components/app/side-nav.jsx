import React from "react";
import styles from "./side-nav.module.scss";
import hyperlinkStyles from "../hyperlink/hyperlink.module.scss";
import { Link, useParams } from "react-router-dom";

export const SideNav = () => {
    const param = useParams().component;
    const componentPages = [
        "colors",
        "button",
    ]
    return (
        <aside className={styles.side_nav}>
            <ul>
                {componentPages.map(c => {
                    return (
                        <li className={param === c ? styles.active : ""} key={c}>
                            <Link className={hyperlinkStyles.hyperlink} to={`/${c}`}>
                                    {c[0].toUpperCase() + c.slice(1)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}