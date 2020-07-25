import React from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from './components/About';
import Education from './components/Education';
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import "./styles/index.scss";
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";

class App extends React.Component {
  constructor(props) {
    super(props);
    AOS.init();
  }

  componentDidMount() {
    var btn = document.getElementById('go-top');

    //Navbar Initially Hidden
    var navbar = document.getElementById('navbar');
    navbar.style.opacity = 0;
    navbar.style.transition = 'all .4s linear';

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        btn.style.display = 'block';
        navbar.style.opacity = 1;
      }
      else {
        btn.style.display = 'none';
        navbar.style.opacity = 0;
      }
    }

    btn.addEventListener('click', () => {
      document.body.scrollTop = 0; //Safari
      document.documentElement.scrollTop = 0;//For Chrome ,Firefox, IE & Opera
    });
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <>
        <Navbar />
        <Intro />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
