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

  return (
    <div className="container_home" id="container_home">
      <Navbar />

      <button
        className="resume"
        src="\images\4_5823542149441916402.pdf"
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
        src=".\images\278620689_534838054648438_2615070036300136368_n.jpg"
        className="pic_home"
        alt=""
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
              <a target="blank" href="https://github.com/Mikee100/utilitybank">
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
              <a target="blank" href="https://github.com/Mikee100/utilitybank">
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
