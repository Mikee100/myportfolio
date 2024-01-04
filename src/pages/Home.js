import React from "react";
import "../pages/home.css";
import "../pages/homebeauty.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Home() {


  const openResume = () => {
    window.open("/images/008129426.pdf");
  };

 
  return (
    <div className="container_home" id="container_home">
     
<About />
<Experience />
<Skills />
<Projects /> 



      <button className="resume" onClick={openResume} target="blank">
        {" "}
        Resume
      </button>
      <a href="./contacts">
        {" "}
        <button className="hireme" o>
          {" "}
          Hire Me
        </button>{" "}
      </a>

      <img
        // eslint-disable-next-line
        src="/images/IMG_20230324_114136_046.jpg"
        className="pic_home"
        alt="Shalene"
      />

      <div class="container">
        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h1>
              I'm Michael <span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>Web Developer & System Engineer</p>
          </div>
          <ul className="media_icons_home">
            <li>
              {" "}
              <a
                target="blank"
                href="https://instagram.com/sharquiz_?igshid=OGQ5ZDc2ODk2ZA=="
              >
                {" "}
                <FaInstagram className="faicon" />
              </a>
            </li>
            <li>
              {" "}
              <a target="blank" href="https://github.com/Mikee100/utilitybank">
                <FaGithub className="faicon" />
              </a>
            </li>
            <li>
              {" "}
              <a
                target="blank"
                href="https://www.linkedin.com/in/shaline-richard33?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                {" "}
                <FaLinkedin className="faicon" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
