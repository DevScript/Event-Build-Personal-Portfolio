import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

import classes from './Work.module.css'
import Heading from '../../Components/Heading/Heading'
import Cards from '../../Components/UI/Cards/Cards'

const work = ()=> {
    return (
        <section className={classes.Work} id="work">
            <Heading text={"Work"}>
                <FontAwesomeIcon icon={faWrench} className={classes.Icon} />
            </Heading>
            <Cards />
        </section>
    );
}

export default work