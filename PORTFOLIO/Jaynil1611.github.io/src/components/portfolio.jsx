import React from "react";
import Tutorials from "../img/Tutorials.png";
import TicTacToe from "../img/TicTacToe.png";
import Maze from "../img/Maze.jpg";
import Blog from "../img/Blog.png";
import Apps from "../img/Apps.png";
import Bank from "../img/Bank.png";
import Diet from "../img/Diet.png";
import Auction from "../img/Auction.png";
import Portfolio_Temp from "../img/Portfolio.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  My Work <br />
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Auction}
                    alt="dice-game"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">ONLINE AUCTION</h2>
                      <p className="box-info">
                        Online Auction Site allows buyers and sellers to come
                        together for buying or selling various items in real
                        time.
                      </p>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="mdi-language-typescript"></iconify-icon>
                      <iconify-icon data-icon="bx-bxl-angular"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/AuctionPro"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2  */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={Diet} alt="Calculator" className="img-fluid"></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">DIET MONITOR</h2>
                      <p className="box-info">
                        Diet Monitor plans, creates and monitors the user's
                        personalized diet with the help of Machine Learning.
                      </p>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="ion-logo-ionic"></iconify-icon>
                      <iconify-icon data-icon="logos-firebase"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/Diet-Monitoring"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Apps}
                    alt="Responsive-webpage"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">APP STORE STUDY</h2>
                      <p className="box-info">
                        This project gives valuable business insights from the
                        google play store app launch study.
                      </p>
                      <iconify-icon data-icon="carbon-logo-python"></iconify-icon>
                      <iconify-icon data-icon="cib-mysql"></iconify-icon>
                      <iconify-icon data-icon="ion-logo-google-playstore"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/Google-Play-Store-App-Launch-Study"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Portfolio_Temp}
                    alt="Portfolio-website"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">REACT PORTFOLIO</h2>
                      <p className="box-info">
                        Portfolio made using React with a Weather API Call.
                        React components by React-MDL.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:material-design"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="mdi:react"></iconify-icon>
                      <iconify-icon data-icon="fa-brands:node"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/AD757/REACTPortfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 5 */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Maze}
                    alt="Nutrition-webapp"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">PATH FINDING: MAZE</h2>
                      <p className="box-info">
                        Comparing Breadth First Search and A star algorithms to
                        find the shortest path in a 2D maze.
                      </p>
                      <iconify-icon data-icon="mdi-language-java"></iconify-icon>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/ADS-PRO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  6*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Tutorials}
                    alt="Weather-app"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">ONLINE TUTORIALS</h2>
                      <p className="box-info">
                        Online education website which provides tutorials &
                        courses on technical topics of engineering.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="logos-firebase"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/TutorialsPoint"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  7*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Bank}
                    alt="Notes taking webapp"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">E-BANK</h2>
                      <p className="box-info">
                        Online Banking website which provides numerous services
                        for payments and account history.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="cib-php"></iconify-icon>
                      <iconify-icon data-icon="cib-mysql"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/E-Bank"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  8*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={TicTacToe}
                    alt="Budget calculator"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">TIC TAC TOE</h2>
                      <p className="box-info">
                        A game which is my favourite now accomodates various
                        scenarios and difficulty level.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="carbon-logo-python"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Jaynil1611/TicTacToe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  9*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={Blog} alt="Recipe" className="img-fluid"></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">ASSOCIATION MINING</h2>
                      <p className="box-info">
                        This blog explains Association Rule Mining (Market
                        Basket Analysis) using on sales dataset.
                      </p>
                      <iconify-icon data-icon="carbon-logo-r-script"></iconify-icon>
                      <iconify-icon data-icon="ion-logo-medium"></iconify-icon>
                      {/* <iconify-icon data-icon="fa-brands:node"></iconify-icon> */}
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://bit.ly/3eBHJUR"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
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

export default Portfolio;
