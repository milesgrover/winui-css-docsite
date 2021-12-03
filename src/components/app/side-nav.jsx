import React from "react";
import styles from "./side-nav.module.scss";
import hyperlinkStyles from "../hyperlink/hyperlink.module.scss";
import { Link, useParams } from "react-router-dom";

export const SideNav = () => {
    const param = useParams().component;
    const componentPages = [
        "design_system",
        "button",
        "checkbox",
        "dialog",
        "hyperlink",
        "hyperlink_button",
        "info_bar",
        "number_box",
        "person_picture",
        "progress",
        "radio",
        "rating",
        "slider",
        "split_button",
        "text_box",
        "toggle_button",
        "toggle_switch",
    ]
    return (
        <aside className={styles.side_nav}>
            <ul>
                {componentPages.map(c => {
                    return (
                        <li className={param === c ? "active" : ""} key={c}>
                            <Link className={hyperlinkStyles.hyperlink} to={`/${c}`}>
                                    {c[0].toUpperCase() + c.slice(1).replace("_", " ")}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}