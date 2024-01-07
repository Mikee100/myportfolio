import React from "react";
import "../pages/home.css";
import "../pages/homebeauty.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from 'react-icons/io5';
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";


export default function Home() {

  const openResume = () => {
    window.open("/images/MICHAEL WAWERU.pdf");
  };
 
 
  return (
    <div className="container_home" id="container_home">
     
<About />
<Experience />
<Skills />
<Projects /> 



      
      <a href="./contacts">
        {" "}
        <button className="hireme" o>
          {" "}
          Send Message <IoSend className="send_home_icon" />
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
                href="https://www.instagram.com/wawe.r.u__/"
              >
                {" "}
                <FaInstagram className="faicon" />
              </a>
            </li>
            <li>
              {" "}
              <a target="blank" href="https://github.com/Mikee100">
                <FaGithub className="faicon" />
              </a>
            </li>
            <li>
              {" "}
              <a
                target="blank"
                href="https://www.linkedin.com/in/michael-waweru-b279031b6/"
              >
                {" "}
                <FaLinkedin className="faicon" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    
          <button className="resume" onClick={openResume} target="blank">
        {" "}
        Resume
      </button>
    </div>
  );
}
