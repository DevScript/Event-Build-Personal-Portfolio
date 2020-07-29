import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  constructor() {
    super();
    this.socials = [
      {
        name: "github",
        link: "https://github.com/Jaynil1611",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/jaynilgaglani/",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/jaynil_gaglani/",
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/people/Jaynil-Gaglani/100009191846557",
      },

      {
        name: "twitter",
        link: "https://twitter.com/JAYNIL1611",
      },
    ];
  }

  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">
                <small>Hi, I'm</small> Jaynil Gaglani
              </h1>
              {/* <p className="pt-3"> HTML5 | CSS3 | Javascript | React |  NodeJS </p> */}
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  I am a&nbsp;
                  <Typed
                    style={{ fontWeight: 600, fontSize: 50 }}
                    strings={[
                      "Frontend Developer",
                      "Backend Developer",
                      "Machine Learning Aspirant",
                      "Football Fan",
                    ]}
                    typeSpeed={30}
                    backDelay={1300}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#about"
                  role="button"
                >
                  Know me more
                </a>
              </p>
              <div>
                {this.socials.map((social, index) => {
                  return (
                    <span className="social" key={index}>
                      <a href={social.link}>
                        <i className={`fa fa-${social.name}`}></i>
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
