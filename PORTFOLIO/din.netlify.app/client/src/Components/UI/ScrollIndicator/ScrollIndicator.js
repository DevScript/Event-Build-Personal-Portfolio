import React from "react";

import classes from "./ScrollIndicator.module.css";

const scrollIndicator = () => {
    return (
        <div
            onClick={() => {
                var elementPosition = document.getElementById("about")
                    .offsetTop;
                window.scrollTo(0, elementPosition);
            }}
            className={classes["mouse"]}
        >
            <span></span>
        </div>
    );
};

export default scrollIndicator;
