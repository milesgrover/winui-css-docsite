import React from "react";
import { Button } from "..";
import styles from "./hyperlink-button.module.scss";
import hyperlinkStyles from "../hyperlink/hyperlink.module.scss";

export const HyperlinkButton = (props) => {
    return (
        <Button className={[hyperlinkStyles.hyperlink, styles.hyperlink_button].join(" ")} {...props} />
    );
}