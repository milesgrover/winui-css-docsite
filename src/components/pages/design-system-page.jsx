import React from "react";
import { CodePresenter, Tab, Pane, TabPanes } from "../app";
import styles from "../app/page-content.module.scss";

/*eslint-disable*/
// Import files as plain text
const cssVars = require("!!raw-loader!../../design/_values.css");
const sassVars = require("!!raw-loader!../../design/_values.scss");
const lessVars = require("!!raw-loader!../../design/_values.less");
const jsVars = require("!!raw-loader!../../design/_values.js");

export const DesignSystemPage = () => {
    return (
        <div className={styles.page_content}>
            <TabPanes defaultActive="ds-css">
                <Tab id="ds-css">Plain CSS variables</Tab>
                <Tab id="ds-scss">SCSS variables</Tab>
                <Tab id="ds-less">Less variables</Tab>
                <Tab id="ds-js">JavaScript variables</Tab>
                <Pane id="ds-css">
                    <CodePresenter lang="css">
                        {cssVars.default.toString()}
                    </CodePresenter>
                </Pane>
                <Pane id="ds-scss">
                    <CodePresenter lang="scss">
                        {sassVars.default.toString()}
                    </CodePresenter>
                </Pane>
                <Pane id="ds-less">
                    <CodePresenter lang="less">
                        {lessVars.default.toString()}
                    </CodePresenter>
                </Pane>
                <Pane id="ds-js">
                    <CodePresenter lang="javascript">
                        {jsVars.default.toString()}
                    </CodePresenter>
                </Pane>
            </TabPanes>
        </div>
    );
}