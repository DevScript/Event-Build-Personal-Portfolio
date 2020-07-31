import React from 'react';
import ProfileImg from "../images/Profile.jpeg";

function About() {
    return (
        <div id="about" className="bg-light" >
            <div className="container"
                data-aos="flip-right"
                data-aos-delay="0"
                data-aos-duration="1500"
                data-aos-easing="ease-in-linear"
            >

                {/*PROFILE PIC AND INTRO */}
                <h5>ABOUT</h5>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12 justify-content-center text-center about-img">
                        <img className="profile-pic" src={ProfileImg} alt="Profile" />
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-12 about-info">
                        <p className="lead">I'm currently an MCA student at Department of Computer Science, University of Delhi. I'm a self-motivated developer offering enthusiasm and understanding of various programming languages. I'm always looking for opportunities to work on exciting things. If you're interested in knowing about my technical experience, checkout my <a href="#projects">Projects.</a></p>
                        <p className="lead">Apart from being a Developer, I prefer playing games like chess , carrom, socializing with friends and family, listening to music and exploring about new technological advancements.</p>
                    </div>
                </div>


                <div className="row about-content">
                    <div className="col-md-6 col-sm-12 col-xs-12 about-profile-section">
                        <h5 style={{ marginBottom: 15 }}>PROFILE</h5>
                        <p><i class="fa fa-laptop mr-1"></i> Web Developer, Software Developer </p>
                        <p><i class="fa fa-graduation-cap mr-1"></i> Masters of Computer Applications at University of Delhi.</p>
                        <ul className="info-list">
                            <li>
                                <strong>Full Name : </strong>
                                <span>Tanmay</span>
                            </li>
                            <li>
                                <strong>Birth Date : </strong>
                                <span>August 8, 1999</span>
                            </li>
                            <li>
                                <strong>Prefered Job : </strong>
                                <span>Web Developer, Software Developer</span>
                            </li>
                            <li>
                                <strong>Website : </strong>
                                <span>www.portfolio-tanmay.heroku.com</span>
                            </li>
                            <li>
                                <strong>Email : </strong>
                                <span>tanmay881999@gmail.com</span>
                            </li>
                            <li>
                                <strong>Phone : </strong>
                                <span>+91 7042825054</span>
                            </li>
                        </ul> {/*<!-- /info-list -->*/}
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12 about-skill-section">
                        <h5 style={{ marginBottom: 15 }}>SKILLS</h5>
                        <p>I like to do both Front End as well as Back End. I am currently working on MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack. </p>
                        <div class="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 skill-section-languages mt-3">
                                <p><strong>Languages</strong></p>
                                <div>
                                    <ul>
                                        <li>C/C++</li>
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                        <li>HTML/CSS</li>
                                        <li>SASS/SCSS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 skill-section-frameworks mt-3">
                                <p><strong>Frameworks/Libraries</strong></p>
                                <div>
                                    <ul>
                                        <li>React Js</li>
                                        <li>Node Js/Express Js</li>
                                        <li>jQuery</li>
                                        <li>Bootstap</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 skill-section-database mt-3">
                                <p><strong>Database</strong></p>
                                <div>
                                    <ul>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 skill-section-workflow mt-3">
                                <p><strong>Workflows</strong></p>
                                <div>
                                    <ul>
                                        <li>Mobile First Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row button-section">
                    <div className="col-12 text-center">
                        <div className=" btn-group about-section-buttons">
                            <a href="#contact" title="Hire Me" className="btn btn-sm btn-outline-secondary">Hire Me</a>
                            <a href="https://drive.google.com/file/d/17taevBqrIRLiywcfa2OS5n-ZHjT0Nzs0/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Download Resume" className="btn btn-sm btn-secondary">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
