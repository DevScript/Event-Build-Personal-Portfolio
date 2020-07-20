import React from 'react'

import classes from './Heading.module.css'


const heading = (props) => {
    return (
        <div
            className={[
                classes["u-center-text"],
                classes["u-margin-bottom-big"]
            ].join(" ")}
        >
            <h2 className={classes["heading-secondary"]}>
                {props.text} {props.children}
            </h2>
        </div>
    );
}

export default heading