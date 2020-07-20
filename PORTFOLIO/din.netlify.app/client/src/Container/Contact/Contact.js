import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import classes from "./Contact.module.css";
import Heading from "../../Components/Heading/Heading";
import Form from '../../Components/Form/Form'

const contact = () => {
    return (
        <section className={classes["Contact"]} id="contact">
            <Heading text={"Drop me a line"}>
                <FontAwesomeIcon icon={faHeart} className={classes.Icon} />
            </Heading>
            <Form />
        </section>
    );
};

export default contact;
