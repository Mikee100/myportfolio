import React, {useState} from "react";
import { FaGithub } from "react-icons/fa";
import "./home.css"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
export default function Navbar(){
  const[Mobile, setMobile] = useState(false)


    const handleClickScroll = () => {
        const element = document.getElementById('container_home');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll2 = () => {
        const element = document.getElementById('container_about');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      

      const handleClickScroll3 = () => {
        const element = document.getElementById('container_experience');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      const handleClickScroll4 = () => {
        const element = document.getElementById('container_project');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      const handleClickScroll5 = () => {
        const element = document.getElementById('container_skills');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
          element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest", transition:".9s" }  );
        }
      };
      
     

    return(
        <div>
           
      
           <div className="github">
               <a target="blank" href="https://github.com/Mikee100">
          <FaGithub className="git_icon" />
     </a>
        </div>
            <ul className={Mobile ? "nav-links-mobile":"nav-ul"} onClick={ ()=> setMobile(false)  } >
 <li className="nav-li"  onClick={handleClickScroll} >Home</li> 
 <li className="nav-li"   onClick={handleClickScroll2}  >About</li> 
<li className="nav-li"  onClick={handleClickScroll3}>Experience</li>
<li className="nav-li"  onClick={handleClickScroll4}>Projects</li>
<li className="nav-li"  onClick={handleClickScroll5}>Skills</li>

    </ul>
    <button className='bars' onClick={() => setMobile(!Mobile)} >
          {Mobile ? <FaTimes/> : <FaBars  />}</button>
        </div>

    )
}



