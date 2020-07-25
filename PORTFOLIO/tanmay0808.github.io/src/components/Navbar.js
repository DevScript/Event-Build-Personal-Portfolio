import React from "react";

function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top">
            <a href="#intro" className="navbar-brand">TANMAY</a>
            <button className="navbar-toggler" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNav">
                <ul className="navbar-nav" id="navbar-nav" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <li className="nav-item active">
                        <a href="#intro" className="nav-link">Intro <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#education">Education <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#projects">Projects <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#contact">Contact <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;