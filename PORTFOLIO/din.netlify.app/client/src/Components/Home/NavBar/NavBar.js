import React, { Component } from "react";

import classes from "./NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
    state = {
        classList: [classes.NavBar],
        scrolling: false,
        scrollUp: true,
        offset: window.pageYOffset,
        slideCompleted: false
    };

    componentDidMount() {
        window.addEventListener("scroll", () => {
            this.eventHandler();
            // eslint-disable-next-line
            if (!this.state.slideCompleted) {
                this.comeInHandler();
            }
        });
    }

    comeInHandler = () => {
        var sections = [...document.querySelectorAll(".module")];
        var scrollPos = window.scrollY;
        const vh = Math.min(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
        sections.forEach(el => {
            if (el.offsetTop - 10 <= scrollPos + vh) {
                // eslint-disable-next-line
                if (window.scrollY + vh == document.body.offsetHeight)
                    this.setState({
                        slideCompleted: true
                    });
                el.classList.add("come-in");
            }
        });
    };

    eventHandler = event => {
        var sections = [...document.querySelectorAll("ul p")];
        var scrollPos = window.pageYOffset;
        sections.forEach(el => {
            var val = el.getAttribute("id");
            var refEl = document.querySelector(val);

            if (
                refEl.offsetTop - 200 <= scrollPos &&
                refEl.offsetTop + refEl.offsetHeight - 200 > scrollPos
            ) {
                // refEl.classList.add("come-in")
                el.classList.add(classes.Hover);
            } else {
                el.classList.remove(classes.Hover);
            }
        });
        if (window.pageYOffset < this.state.offset) {
            this.setState({
                offset: window.pageYOffset
            });

            if (
                // eslint-disable-next-line
                window.scrollY == 0 &&
                this.state.scrollUp &&
                this.state.scrolling
            ) {
                let classList = [classes.NavBar, classes.NavBarTop];
                this.setState({
                    scrolling: false,
                    classList: classList
                });
            }
            if (
                // eslint-disable-next-line
                !window.scrollY == 0 &&
                !this.state.scrollUp
            ) {
                let classList = [classes.NavBar, classes.NavBarDown];
                this.setState({
                    scrollUp: true,
                    classList: classList
                });
            }
        } else {
            this.setState({ offset: window.pageYOffset });
            if (this.state.scrollUp) {
                let classList = [classes.NavBar, classes.NavBarUp];
                this.setState({
                    scrolling: true,
                    scrollUp: false,
                    classList: classList
                });
            }
        }
    };

    navigationHandler = id => {
        var elementPosition = document.getElementById(id).offsetTop;
        window.scrollTo(0, elementPosition);
    };

    render() {
        return (
            <nav className={this.state.classList.join(" ")}>
                <FontAwesomeIcon
                    icon={faJedi}
                    className={classes.Icon}
                ></FontAwesomeIcon>
                <ul>
                    {" "}
                    <li>
                        <p
                            id="#about"
                            onClick={() => this.navigationHandler("about")}
                        >
                            About
                        </p>
                    </li>
                    <li>
                        <p
                            id="#work"
                            onClick={() => this.navigationHandler("work")}
                        >
                            Work
                        </p>
                    </li>{" "}
                    <li>
                        <p
                            id="#contact"
                            onClick={() => this.navigationHandler("contact")}
                        >
                            Contact
                        </p>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
