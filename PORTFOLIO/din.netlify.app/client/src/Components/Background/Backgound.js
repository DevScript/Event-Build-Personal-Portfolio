import React from "react";
import classes from './Background.module.css'
import Aux from "../../hoc/Auxilary/Auxilary";

const background = () => {
    return (
        <Aux>
            <img src="/SVG/left.svg" alt="lefgBG" className={classes.left} />
            <img src="/SVG/right.svg" alt="rightBG" className={classes.right} />
        </Aux>
    );
};

export default background;
