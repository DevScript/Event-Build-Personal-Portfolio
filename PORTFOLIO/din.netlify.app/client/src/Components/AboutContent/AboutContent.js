import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import myself from '../../assets/myself.jpeg'

import classes from "./AboutContent.module.css";

const aboutContent = () => {
    return (
        <div className={classes["row"]}>
            <div className={[classes["col-1-of-2"], "module"].join(" ")}>
                <p className={classes["paragraph"]}>
                    <span style={{ fontStyle: "italic" }}>Hello</span>{" "}
                    <span>
                        <FontAwesomeIcon
                            icon={faHandSparkles}
                            className={classes.Icon}
                        />
                    </span>{" "}
                    I'm <span style={{ fontWeight: "bold" }}>Dinesh</span>, I am
                    a pre final year graduate of Computer Science and
                    Engineering program at{" "}
                    <a
                        href="https://sairam.edu.in/"
                        target="_blank"
                        className={classes.College}
                        rel="noopener noreferrer"
                    >
                        <span style={{ fontWeight: "bold" }}>
                            {" "}
                            Sri Sairam Engineering College
                        </span>
                    </a>
                    . I live at Chennai, TamilNadu{" "}
                    <span>
                        <FontAwesomeIcon
                            icon={faSmileWink}
                            className={classes.Icon}
                        />
                    </span>
                    . I want to make things that make a difference. Having
                    developed a hand full of personal applications, I have a
                    strong aptitude for troubleshooting and developing quick and
                    innovative solutions to tech-based issues. And I'm open for
                    opportunities, here's my{" "}
                    <a
                        href="https://drive.google.com/file/d/1skCLGdQ6KLAjsr2jxpac-qRppeHrFJia/view?usp=drivesdk"
                        target="_blank"
                        className={classes.College}
                        rel="noopener noreferrer"
                    >
                        <span style={{ fontWeight: "bold" }}> Resume </span>
                    </a>
                    . For more about me{" "}
                    <a
                        href="http://www.linkedin.com/in/sy-d"
                        target="_blank"
                        className={classes.College}
                        rel="noopener noreferrer"
                    >
                        <span style={{ fontWeight: "bold" }}> click here.</span>
                    </a>{" "}
                </p>
            </div>
            <div className={[classes["col-1-of-2"], "module"].join(" ")}>
                <div className={classes["composition"]}>
                    <img
                        alt="myself"
                        className={[
                            classes["composition__photo"],
                            classes["composition__photo--p2"]
                        ].join(" ")}
                        src={myself}
                    />
                </div>
            </div>
        </div>
    );
};

export default aboutContent;
