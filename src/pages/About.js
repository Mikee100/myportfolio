import "../pages/about.css";
import { IoBookSharp } from "react-icons/io5";

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
          <h1 >  Interests</h1>
          <ul className="interests_list" >
          <li tyle={{ textDecoration: 'none'}} ><IoBookSharp />Web development</li>
          <li tyle={{ textDecoration: 'none'}} ><IoBookSharp />System development</li>
          <li tyle={{ textDecoration: 'none'}} ><IoBookSharp />Artificial intelligence</li>

          </ul>  
          <div className="java_language" >  
          <h1>Languages</h1>
          <p>JAVA</p>
          <div className="java_div" ></div>

</div>
        </div>
      </div>
    </div>
  );
}
