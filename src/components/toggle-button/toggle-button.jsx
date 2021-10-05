import React, { useState } from "react";
import { Button } from "../";

export const ToggleButton = ({onClick, ...props}) => {
    const [toggled, setToggled ] = useState(false);
    const handleClick = () => {
        setToggled(!toggled);
        if (onClick) {
            onClick();
        }
    }
    return (
        <Button {...props} onClick={handleClick} primary={toggled}>Toggle button</Button>
    );
}