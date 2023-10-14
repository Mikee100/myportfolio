import React from "react";
import "../pages/home.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("container_contacts");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView();
      element.scrollIntoView(false);
      element.scrollIntoView({ block: "end" });
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
        transition: ".9s",
      });
    }
  };
  const openResume = () => {
    window.open('/images/008129426.pdf');
  };
  return (
    <div className="container_home" id="container_home">
      <Navbar />

      <button
        className="resume"
        onClick={openResume}
        target="blank"
      >
        {" "}
        Resume
      </button>
      <button className="hireme" onClick={handleClickScroll}>
        {" "}
        Hire Me
      </button>

      <img
      // eslint-disable-next-line
        src="/images/IMG-20231013-WA0012.jpg"
        className="pic_home"
        alt="Shalene"
      />

      <div class="container">
       


        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h1>
              I'm Shaline <span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>Web Developer & Enterpreneur</p>
          </div>
          <ul className="media_icons_home">
            <li>
              {" "}
              <a target="blank" href="https://instagram.com/sharquiz_?igshid=OGQ5ZDc2ODk2ZA==">
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
              <a target="blank" href="https://www.linkedin.com/in/shaline-richard33?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
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
