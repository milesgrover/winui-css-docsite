import React from "react";
import { CodePresenter, Tab, Pane, TabPanes } from "../app";
import styles from "../app/page-content.module.scss";

/*eslint-disable*/
// Import files as plain text
const cssVars = require("!!raw-loader!../../design/_values.css");
const sassVars = require("!!raw-loader!../../design/_values.scss");
const lessVars = require("!!raw-loader!../../design/_values.less");
const jsVars = require("!!raw-loader!../../design/_values.js");

export const ColorsPage = () => {
    return (
        <div className={styles.page_content}>
            <TabPanes defaultActive="colors-css">
                <Tab id="colors-css">Plain CSS variables</Tab>
                <Tab id="colors-scss">SCSS variables</Tab>
                <Tab id="colors-less">Less variables</Tab>
                <Tab id="colors-js">JavaScript variables</Tab>
                <Pane id="colors-css">
                    <CodePresenter lang="css">
                        {cssVars.default.toString()}
                    </CodePresenter>
                </Pane>
                <Pane id="colors-scss">
                    <CodePresenter lang="scss">
                        {sassVars.default.toString()}
                    </CodePresenter>
                </Pane>
                <Pane id="colors-less">
                    <CodePresenter lang="less">
                        {lessVars.default.toString()}
                    </CodePresenter>
                </Pane>
                <Pane id="colors-js">
                    <CodePresenter lang="javascript">
                        {jsVars.default.toString()}
                    </CodePresenter>
                </Pane>
            </TabPanes>
        </div>
    );
}