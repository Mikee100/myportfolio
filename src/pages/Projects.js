import React from 'react'
import "../pages/projcont.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

export default function Projects() {

    const handleClickScroll = () => {
        const element = document.getElementById("container_home");
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
      const handleClickScroll2 = () => {
        const element = document.getElementById("container_about");
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
      const handleClickScroll3 = () => {
        const element = document.getElementById("container_experience");
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
      const handleClickScroll4 = () => {
        const element = document.getElementById("container_project");
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
      const handleClickScroll5 = () => {
        const element = document.getElementById("container_skills");
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
    <div className='container_project' id='container_project' >

        <h2 className='project_hd' >Projects</h2>
       
<div className='project_1'   >
 
 <a href='https://euphonious-frangollo-60c044.netlify.app' target='blank' >
    <img src='/images/netflix.png' className='bankpic1'  alt=''  /> 

    
    <p className='project_name' >Netflix Clone</p>

    <p className='about_the_project' > 
    <li>Developed a single page website using Vite.Js, Node.js, and Firebase files for movie watching </li>
    <li>Used static site generation resulting in faster load time and increasing efficiency.</li>	 
    <li>Used Firestore for user authentication and saving of user data and SWR for fetching for data and Browser Local Storage for User Authentication.</li> 
    <li>A user can create an account and watch a movie.</li>
 </p>
</a>

</div>

<div className='project_2' >
 
 <a href='https://relaxed-pasca-8a9b74.netlify.app' target='blank' >
    <img src='/images/mathu_business.png' className='bankpic1'  alt=''  /> 


  
    <p className='project_name' > E-Commerce Website </p>
    <p className='about_the_project' > 
    <li>Developed a single page website using React.Js, Node.js, and Firebase files for purchasing clothes and shoes</li>
    <li>Used static site generation resulting in faster load time and increasing efficiency</li>	 
    <li>Used Firestore for user authentication and saving of user data and SWR for fetching for data and Browser Local Storage for User Authentication</li> 
    <li>A user can create an account and purchase a number of items from the website.</li>
 </p>

 </a>
</div>


<div className='project_3' >
 
 <a href='https://github.com/Mikee100/mwanzobarakasystem' target='blank' >
    <img src='/images/bank3.jpg' className='bankpic1'  alt=''  /> 

   
    <p className='project_name' >Mwanzo Baraka System </p>
    <p className='about_the_project' > 
    <li>Developed using multiple system pages with multiple functionalities. </li>
    <li>The system allows a user to create an account, login into the system and borrow a loan.</li>	 
    <li>There are different methods in which a loan can be taken: The loans can be taken in form of either a group or an individual..</li> 
    <li>The data is stored in MySQL databases system and can be easily retrieved and accessed by the administrator.</li>
    <li>The system has two access rights: It can be as a registered user or an administrator.</li>
    <li>The administrator is the one to register the new users and the different groups.</li>
 </p>
</a>


</div>

<div className="footer_projects">
        <ul className="ul_pages">
          <p>Pages</p>
          <li className="li_pages" onClick={handleClickScroll}>
            {" "}
            Home{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll2}>
            {" "}
            About{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll3}>
            {" "}
            Experience{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll5}>
            {" "}
            Skills{" "}
          </li>
          <li className="li_pages" onClick={handleClickScroll4}>
            {" "}
            Projects{" "}
          </li>
        </ul>

        <ul className="media_icons">
          <p>Socials</p>
          <li>
            {" "}
            <a target="blank" href="https://www.instagram.com/wawe.r.u__/">
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
            <a target="blank" href="https://www.linkedin.com/in/michael-waweru-b279031b6/">
              {" "}
              <FaLinkedin className="faicon" />
            </a>{" "}
          </li>
        </ul>
        <a href="./contacts"><button className='btn_send_message'>Send message<IoSend className='send_icon' /> </button> </a>
        <p className='mynumber'><FaPhone /> (+254 721840961)</p>

        <p className="copyright_project"> &copy;Copyright Michael </p>
      </div>

    </div>
  )
}
