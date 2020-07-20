import React from "react";

import classes from './HeadingPrimaryMain.module.css'
const headingPrimayMain = () => {
    return (
        <div className={classes.title}>
            <span className={classes.block}></span>
            <h1 className={classes.HeadingPrimaryMain}>Hola, I'm Dinesh!</h1>
        </div>
    );
}

export default headingPrimayMain;