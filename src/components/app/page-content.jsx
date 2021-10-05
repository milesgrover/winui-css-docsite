import React from "react";
import { useParams } from "react-router-dom";
import { 
    HomePage,
    ButtonPage,
    CheckboxPage,
    DesignSystemPage,
    HyperlinkPage,
    HyperlinkButtonPage,
    NumberBoxPage,
    ProgressPage,
    RadioPage,
    RatingPage,
    SliderPage,
    TextBoxPage,
    ToggleButtonPage,
    ToggleSwitchPage,
} from "../pages";

export const PageContent = () => {
    let { component } = useParams();
    if (!component) {
        component = "home";
    }
    const pages = {
        home: HomePage,
        design_system: DesignSystemPage,
        button: ButtonPage,
        checkbox: CheckboxPage,
        hyperlink: HyperlinkPage,
        hyperlink_button: HyperlinkButtonPage,
        number_box: NumberBoxPage,
        progress: ProgressPage,
        radio: RadioPage,
        rating: RatingPage,
        slider: SliderPage,
        text_box: TextBoxPage,
        toggle_button: ToggleButtonPage,
        toggle_switch: ToggleSwitchPage,
    }
    const CurrentPage = pages[component];
    return (
        <CurrentPage />
    );
}