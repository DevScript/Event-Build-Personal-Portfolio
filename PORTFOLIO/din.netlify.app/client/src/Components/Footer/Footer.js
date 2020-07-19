import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import classes from './Footer.module.css';

const footer = () => {
    return(

        <section className={classes.Footer}>
            <div className={classes.FooterHead}>
                Built by
            </div>
            <div className={classes.FooterContent}>
                @Dinesh <span className= {classes.Icon}><FontAwesomeIcon icon= {faGratipay}/></span>
            </div>
        </section>

    )
}

export default footer;