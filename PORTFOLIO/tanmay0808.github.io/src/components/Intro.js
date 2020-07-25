import React from 'react';
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

const MyWords = [
  "I am a Programmer",
  "I am a Web Developer",
  "I am a Tech Enthusiast",
];
let index = 0;

function Intro() {

  const [typingContent, setContent] = useState("I am a Programmer");
  const intervalRef = useRef({});
  const name = useTypewriter(typingContent);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        // index = index + 1 > 2 ? 0 : ++index + 1;
        index = index > 2 ? 0 : ++index;
        setContent(MyWords[index]);
      }, 5000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [typingContent]
  );

  return (
    <div id="intro" className="text-center">
      <div className="content">
        <h3>Hello World</h3>
        <h1>I am Tanmay</h1>
        <div className="whoiam">
          <p className="cursor">{name}</p>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/tanmay.saxena.353/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/Tanmay881999"><i className="fab fa-twitter"></i></a>
          <a href="https://github.com/Tanmay0808"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/saxena.tanmay"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/tanmay-saxena-337027194"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="more-about-me"><a href="#about"><i className="fas fa-chevron-down"></i></a></div>
    </div>
  );
}

export default Intro;