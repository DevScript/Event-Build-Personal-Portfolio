import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faGithub,
    faGoogle,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";


import classes from './SocialIcon.module.css'

const socialIcon = () => {
    return (
        <div className={classes.SocialContainer}>
            <a
                className={classes.SocialBtn}
                href="http://www.linkedin.com/in/sy-d"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className={classes.SocialIcon}
                    icon={faLinkedin}
                />
            </a>
            <a
                className={classes.SocialBtn}
                href="http://www.github.com/dineshsy"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className={classes.SocialIcon}
                    icon={faGithub}
                />
            </a>
            <a
                className={classes.SocialBtn}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=s.ydinesh1177@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className={classes.SocialIcon}
                    icon={faGoogle}
                />
            </a>
            <a
                className={classes.SocialBtn}
                href="https://www.facebook.com/DineshSYD"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className={classes.SocialIcon}
                    icon={faFacebookF}
                />
            </a>
            <a
                className={classes.SocialBtn}
                href="https://www.instagram.com/s.y_d/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className={classes.SocialIcon}
                    icon={faInstagram}
                />
            </a>
        </div>
    );
}

export default socialIcon;