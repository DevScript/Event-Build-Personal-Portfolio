import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";


import classes from "./Cards.module.css";

const cards = () => {
    return (
        <div className={classes["row"]}>
            <div className={[classes["col-1-of-3"], "module"].join(" ")}>
                <div className={classes["card"]}>
                    <div
                        className={[
                            classes["card__side"],
                            classes["card__side--front"]
                        ].join(" ")}
                    >
                        <div
                            className={[
                                classes["card__picture"],
                                classes["card__picture--1"]
                            ].join(" ")}
                        >
                            {" "}
                        </div>
                        <h4 className={classes["card__heading"]}>
                            <span
                                className={[
                                    classes["card__heading-span"],
                                    classes["card__heading-span--1"]
                                ].join(" ")}
                            >
                                Do It
                            </span>
                        </h4>
                        <div className={classes["card__details"]}>
                            This app is based on AI and ML It recognize the
                            posture of the user Then it evalute with the
                            original exercise Shows the accuracy to the user as
                            result It uses FlaskAPI to communicate with the
                            server
                        </div>
                    </div>
                    <div
                        className={[
                            classes["card__side"],
                            classes["card__side--back"],
                            classes["card__side--back-1"]
                        ].join(" ")}
                    >
                        <div className={classes["card__cta"]}>
                            <div className={classes["card__price-box"]}>
                                <p className={classes["card__price-only"]}>
                                    Check Repository
                                </p>
                                <a
                                    href="https://github.com/dineshsy/Do-it"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes["card__price-value"]}
                                >
                                    <FontAwesomeIcon
                                        icon={faGithubSquare}
                                        className={classes.Icon}
                                    />
                                </a>
                            </div>
                            <div className={classes["card__price"]}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={[classes["col-1-of-3"], "module"].join(" ")}>
                <div className={classes["card"]}>
                    <div
                        className={[
                            classes["card__side"],
                            classes["card__side--front"]
                        ].join(" ")}
                    >
                        <div
                            className={[
                                classes["card__picture"],
                                classes["card__picture--2"]
                            ].join(" ")}
                        >
                            &nbsp;
                        </div>
                        <h4 className={classes["card__heading"]}>
                            <span
                                className={[
                                    classes["card__heading-span"],
                                    classes["card__heading-span--1"]
                                ].join(" ")}
                            >
                                D Diagnose
                            </span>
                        </h4>
                        <div className={classes["card__details"]}>
                            <div>
                                It helps to detect disease in plants The ML
                                modal is trained with the help of Dataset The
                                app uses the camera for plant's image The image
                                will be provided to the tflite modal Then the
                                app will provide the health of the plant
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            classes["card__side"],
                            classes["card__side--back"],
                            classes["card__side--back-1"]
                        ].join(" ")}
                    >
                        <div className={classes["card__cta"]}>
                            <div className={classes["card__price-box"]}>
                                <p className={classes["card__price-only"]}>
                                    Check Repository
                                </p>
                                <a
                                    href="https://github.com/dineshsy/D-Diagnose"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes["card__price-value"]}
                                >
                                    <FontAwesomeIcon
                                        icon={faGithubSquare}
                                        className={classes.Icon}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={[classes["col-1-of-3"], "module"].join(" ")}>
                <div className={classes["card"]}>
                    <div
                        className={[
                            classes["card__side"],
                            classes["card__side--front"]
                        ].join(" ")}
                    >
                        <div
                            className={[
                                classes["card__picture"],
                                classes["card__picture--3"]
                            ].join(" ")}
                        >
                            &nbsp;
                        </div>
                        <h4 className={classes["card__heading"]}>
                            <span
                                className={[
                                    classes["card__heading-span"],
                                    classes["card__heading-span--1"]
                                ].join(" ")}
                            >
                                NoToDo
                            </span>
                        </h4>
                        <div className={classes["card__details"]}>
                            An Flutter App, that can access your Database. This
                            App Creates a list of things that you need to do.As
                            simple as possible. It uses SQFlite. pathfinder() =>
                            To find your default database path, with respective
                            your OS (Android/IOS).
                        </div>
                    </div>
                    <div
                        className={[
                            classes["card__side"],
                            classes["card__side--back"],
                            classes["card__side--back-1"]
                        ].join(" ")}
                    >
                        <div className={classes["card__cta"]}>
                            <div className={classes["card__price-box"]}>
                                <p className={classes["card__price-only"]}>
                                    Check Repository
                                </p>
                                <a
                                    href="https://github.com/dineshsy/notodo_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes["card__price-value"]}
                                >
                                    <FontAwesomeIcon
                                        icon={faGithubSquare}
                                        className={classes.Icon}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cards;
