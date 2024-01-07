import "../pages/about.css";
import { IoBookSharp } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function About() {
  return (
    <div className="container_about" id="container_about">
 
      <h1 className="about_hd"> About me</h1>

      

      <div className="about_desc">
        <ul className="list_icons">
          <li style={{ backgroundColor: "red" }}> </li>
          <li style={{ backgroundColor: "yellow" }}> </li>
          <li style={{ backgroundColor: "green" }}></li>
        </ul>
        <h3 className="hd_hi"> Hi there:) </h3>

        <div className="myabout_desc">
          <p>
            {" "}
            As a project management student with a passion for technology,
            particularly in software development, I am continuously seeking new
            challenges to expand my skill set. My expertise in organizing and
            executing projects from start to finish has enabled me to excel in
            various roles. 💻 Additionally, as a self-taught front-end
            developer, I am dedicated to staying up to date with the latest
            technology and software development trends. I thrive on finding
            innovative solutions to complex problems and delivering high-quality
            results that surpass expectations.{" "}
          </p>
          <h1 className="h1_interests" >  Interests</h1>
          <ul className="interests_list" >
            
          <li tyle={{ textDecoration: 'none'}} ><IoBookSharp />Web development</li>
          <li tyle={{ textDecoration: 'none'}} ><IoBookSharp />System development</li>
          <li tyle={{ textDecoration: 'none'}} ><IoBookSharp />Artificial intelligence</li>

          </ul>  
          <div className="java_language" >  
          <h1>Languages</h1>
          <FaJava className="java_icon" />
          <p>JAVA</p>
          </div>

           <div className="skills-wrapper" >
          <div className="skills-percent" style={{width:"80%"}}></div>

          </div>

     
          <div className="sql_language" >  
        
          <FaDatabase className="sql_icon" />
          <p>SQL</p>
          </div>

          <div className="skills-wrapper-sql" >
          <div className="skills-percent-sql" style={{width:"70%"}}></div>
          </div>

          
          <div className="js_language" >  
        
        <IoLogoJavascript className="js_icon" />
        <p>JavaScript</p>
        </div>

        <div className="skills-wrapper-js" >
        <div className="skills-percent-js" style={{width:"85%"}}></div>




         
       
          </div>
        </div>
      </div>
    </div>
  );
}
