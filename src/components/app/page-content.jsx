import React from "react";
import { useParams } from "react-router-dom";
import { 
    HomePage,
    ButtonPage,
    CheckboxPage,
    DesignSystemPage,
    DialogPage,
    HyperlinkPage,
    HyperlinkButtonPage,
    InfoBarPage,
    NumberBoxPage,
    PersonPicturePage,
    ProgressPage,
    RadioPage,
    RatingPage,
    SliderPage,
    SplitButtonPage,
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
        dialog: DialogPage,
        hyperlink: HyperlinkPage,
        hyperlink_button: HyperlinkButtonPage,
        info_bar: InfoBarPage,
        number_box: NumberBoxPage,
        person_picture: PersonPicturePage,
        progress: ProgressPage,
        radio: RadioPage,
        rating: RatingPage,
        slider: SliderPage,
        split_button: SplitButtonPage,
        text_box: TextBoxPage,
        toggle_button: ToggleButtonPage,
        toggle_switch: ToggleSwitchPage,
    }
    const CurrentPage = pages[component];
    return (
        <CurrentPage />
    );
}