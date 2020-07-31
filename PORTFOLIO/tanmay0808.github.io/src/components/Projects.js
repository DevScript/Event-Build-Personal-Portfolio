import React from 'react'
import Calculator from "../images/Calculator.png";
import MdPreviewer from '../images/MdPreviewer.png';
import Locator from "../images/LocationTracker.png";
import PomodoroTimer from "../images/PomodoroTimer.png";
import URLShortener from "../images/URLShortener.png";

const projects = [
    {
        title: 'Calculator',
        src: Calculator,
        code: 'https://github.com/Tanmay0808/fcc-frontend-projects/tree/master/javascript-calculator',
        live: 'https://js-simple-calculator.netlify.app',
        about: 'Simple mathematical calculator with formula based evaluation that display error message in case of wrong input expressions.'
    },
    {
        title: 'Markdown Previewer',
        code: 'https://github.com/Tanmay0808/fcc-frontend-projects/tree/master/markdown-previewer',
        src: MdPreviewer,
        live: 'https://previewer-markdown.netlify.app/',
        about: 'Write your html in editor and the app will show corresponding markdown in the previewer.'
    },
    {
        title: 'Location Tracker',
        code: 'https://github.com/Tanmay0808/location-tracker',
        src: Locator,
        live: 'https://track-my-location.netlify.app/',
        about: 'Track your location in real time with an option to download your location co-ordinates in a csv file.'
    },
    {
        title: 'Pomodoro Timer',
        code: 'https://github.com/Tanmay0808/fcc-frontend-projects/tree/master/pomodoro-clock',
        src: PomodoroTimer,
        live: 'https://pomodoro-clock-js.netlify.app/',
        about: 'Set session and break lengths and the timer will beep once it reaches zero.'
    },
    {
        title: 'URL Shortener',
        code: 'https://github.com/Tanmay0808/URL-Shortener',
        src: URLShortener,
        live: 'http://url-shortener-site.herokuapp.com/',
        about: 'Shorten your long URLs with this simple app made using NodeJs.'
    }
];

function Projects() {

    const data = projects.map(item => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mycards">
                <div className="card">
                    <img className="card-img-top" style={{ minHeight: 200 }} src={item.src} alt={`${item.title}`} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>

                        <p className="card-text">{item.about}</p>
                        <hr />
                        <a href={item.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm float-left"><i className="fab fa-github mr-2"></i>Code</a>
                        <a href={item.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm float-right"><i className="fa fa-caret-right mr-2"></i>Live App</a>
                    </div>
                </div>
            </div>
        );
    });


    return (
        <div id="projects" className="text-center">
            <div className="container">
                <div className="row"
                    data-aos="zoom-in-left"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                >
                    <div className="col-12">
                        <h5 className="project-heading">PROJECTS</h5>
                    </div>
                    {data}
                </div>
            </div>
        </div>
    )
}

export default Projects;