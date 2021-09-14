import React from "react";
import "../../design/win-ui-style-provider.scss";
import "../focus/focus.scss";

export const Provider = (props) => {
    return (
        <div className={`win-ui-style-provider${props.theme === "dark" ? " theme-dark" : ""}`}>
            {props.children}
        </div>
    )
}