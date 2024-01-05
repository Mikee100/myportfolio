import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import "../pages/skillexp.css"
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";



function Skills() {
  return (
    <div className="container_skills" id="container_skills">

      <h2 className="hd_skills">Skills</h2>

      <ul className="list_skills">
        <li>
          {" "}
          <FaCss3Alt className="fa" /> <p className="p1">CSS</p>{" "}
        </li>
        <li>
          {" "}
          <FaHtml5 className="fa" /> <p className="p1">HTML</p>{" "}
        </li>
        <li>
          {" "}
          <FaVuejs className="fa" /> <p className="p1">VITE</p>{" "}
        </li>
        <li>
          <FaReact className="fa" /> <p className="p2">REACT</p>{" "}
        </li>
        <li>
          <FaJsSquare className="fa" /> <p className="p2">JS</p>{" "}
        </li>
        <li>
          {" "}
          <FaPython className="fa" /> <p className="p2">PYTHON</p>{" "}
        </li>
        <li>
          {" "}
          <FaJava className="fa" />
          <p className="p3">JAVA</p>{" "}
        </li>
        <li>
          <FaBootstrap className="fa" />
          <p className="p3">BOOTSTRAP</p>{" "}
        </li>
        
      </ul>
    </div>
  );
}

export default Skills;
