import React from "react";
import male2 from "../img/male2.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hey, I am Jaynil Gaglani, born and brought up in Mumbai, India. I always look to be among the best in what I do be it academics, sports or work. I am a self-motivated person who believes that hard work is the only key to open all doors of success.",
        },
        {
          id: "second-p-about",
          content:
            "On navigating to the work section, you'll see some of the frontend & backend projects I've accomplished. I enjoy to continue learning to improve my knowledge and to gain a completely new experience. I want to take my passion, education, and experience to develop websites, webapps and mobile applications.",
        },
        {
          id: "third-p-about",
          content:
            "Apart from coding and academics, you will find me playing football, listening to electronic music or gaming. I am open to work as a frontend, backend or fullstack software developer in your company. I value and respect the culture, vision and mission of your company. Please feel free to contact me for job opportunities!",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={male2}
                            alt="profile pic"
                            style={{
                              height: 250 + "px",
                              width: 250 + "px",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">Skills</h5>
                        </div>

                        <div className="skills-text">
                          <p>
                            <iconify-icon data-icon="logos:html-5"></iconify-icon>
                            HTML / HTML5
                            <br /> <br />
                            <iconify-icon data-icon="logos:css-3"></iconify-icon>
                            CSS / CSS3 <br /> <br />
                            <iconify-icon data-icon="logos:javascript"></iconify-icon>
                            Javascript <br /> <br />
                            <iconify-icon data-icon="logos:react"></iconify-icon>
                            React JS <br /> <br />
                            <iconify-icon data-icon="logos:nodejs"></iconify-icon>
                            Node JS <br /> <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="leads" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
