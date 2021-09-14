import React from "react";
import { useParams } from "react-router-dom";
import { HomePage, ButtonPage, ColorsPage } from "../pages";

export const PageContent = () => {
    let { component } = useParams();
    if (!component) {
        component = "home";
    }
    const pages = {
        home: HomePage,
        button: ButtonPage,
        colors: ColorsPage
    }
    const CurrentPage = pages[component];
    return (
        <CurrentPage />
    );
}