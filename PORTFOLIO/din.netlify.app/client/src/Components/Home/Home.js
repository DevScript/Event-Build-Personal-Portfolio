import React from "react";

import classes from "./Home.module.css";

import HeadingPrimary from "./HeadingPrimary/HeadingPrimary";

const home = () => {
    return (
        <section className={classes.Home}>
            <HeadingPrimary />
            
        </section>
    );
};

export default home;
