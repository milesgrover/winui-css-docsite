import React, { useState } from "react";
import { Acrylic } from "..";
import styles from "./context-menu.module.scss";

export const ContextMenu = (props) => {
    const [ selected, setSelected ] = useState(props.items ? props.items.findIndex(item => item.selected) : -1);
    let selectedGlyph = props.selection;
    if (selectedGlyph === true) {
        selectedGlyph = "\ue73e";
    }
    if (props.show) {
        const calcOffsetStyle = () => {
            const offsetStyle = {};
            if (props.offset) {
                if (props.offset.x) {
                    if (props.offset.x === "center") {
                        offsetStyle.left = "50%";
                        offsetStyle.transform = "translateX(-50%)";
                    } else {
                        offsetStyle.left = props.offset.x;
                    }
                }
                if (props.offset.y) {
                    offsetStyle.top = props.offset.y;
                }
            }
            return offsetStyle;
        }
        const mergeStyles = () => {
            return Object.assign({}, calcOffsetStyle(), props.style);
        }
        const generateItemClassName = (item) => {
            const className = [styles.list_item];
            if (item.divider) {
                className.push(styles.has_divider);
            }
            if (selectedGlyph) {
                className.push(styles.has_icon);
            }
            return className.join(" ");
        }
        const handleSelectClick = (item, index) => {
            setSelected(index);
            item.onClick();
        }
        const generateItems = () => {
            if (props.items) {
                return props.items.map((item, index) => {
                    return (
                        <li className={generateItemClassName(item)}>
                            <button onClick={props.selection ? () => handleSelectClick(item, index) : item.onClick}>
                                {selected === index && <span className={styles.item_icon}>{selectedGlyph}</span>}
                                {item.text}
                            </button>
                        </li>
                    );
                });
            }
        }
        return (
            <div className={styles.context_menu} style={mergeStyles()}>
                <ul className={styles.content}>
                    {generateItems()}
                </ul>
                <Acrylic />
            </div>
        );
    } else {
        return null;
    }
}