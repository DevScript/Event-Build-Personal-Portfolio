import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";

import classes from "./About.module.css";
import Heading from "../../Components/Heading/Heading";
import AboutContent from "../../Components/AboutContent/AboutContent";

const about = () => {
    return (
        <section className={classes.About} id="about">
            <Heading text={"About"}>
                <FontAwesomeIcon icon={faSnowman} className={classes.Icon} />
            </Heading>
            <AboutContent />
        </section>
    );
};

export default about;
