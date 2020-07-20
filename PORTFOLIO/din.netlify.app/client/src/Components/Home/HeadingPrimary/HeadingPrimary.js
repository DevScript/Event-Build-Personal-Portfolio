import React from "react";

import classes from './HeadingPrimary.module.css'

import HeadingPrimaryMain from './HeadingPrimaryMain/HeadinPrimaryMain'
import ScrollText from "./ScrollText/ScrollText";
import SocialIcon from './SocialIcons/SocialIcon'
import ScrollIndicator from "../../UI/ScrollIndicator/ScrollIndicator";

const headingPrimary = () => {
    return (
        <div className={classes.HeadingPrimary}>
            <HeadingPrimaryMain />
            <ScrollText />
            <p className={classes.HeadingPrimarySub}>
                Thinking “out of the box” to provide software-based solutions.
            </p>
            <SocialIcon />
            <div className={classes.Container}>
                <ScrollIndicator />
            </div>
        </div>
    );
}

export default headingPrimary;
