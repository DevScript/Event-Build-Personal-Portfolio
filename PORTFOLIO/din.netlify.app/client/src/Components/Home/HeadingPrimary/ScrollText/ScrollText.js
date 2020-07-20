import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRocket,
    faGrinHearts,
    faAnchor,
    faChartLine
} from "@fortawesome/free-solid-svg-icons";

import classes from "./ScrollText.module.css";

const scrollText = () => {
    return (
        <div className={classes.TextScroll}>
            <ul className={classes.flip4}>
                <li>
                    Node{" "}
                    <FontAwesomeIcon icon={faAnchor} className={classes.Icon} />
                </li>
                <li>
                    React{" "}
                    <FontAwesomeIcon
                        icon={faGrinHearts}
                        className={classes.Icon}
                    />
                </li>
                <li>
                    Data Science{" "}
                    <FontAwesomeIcon
                        icon={faChartLine}
                        className={classes.Icon}
                    />
                </li>
                <li>
                    Flutter{" "}
                    <FontAwesomeIcon icon={faRocket} className={classes.Icon} />
                </li>
            </ul>
        </div>
    );
};

export default scrollText;
