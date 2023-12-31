import React, {useState} from "react";
import { FaGithub } from "react-icons/fa";
import "./home.css"

import { Link } from "react-router-dom";
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
     
     <h1 className="my_name" >MW</h1>
           <div className="github">
               <a target="blank" href="https://github.com/Mikee100">
          <FaGithub className="git_icon" />
     </a>
        </div>
            <ul className={Mobile ? "nav-links-mobile":"nav-ul"} onClick={ ()=> setMobile(false)  } >
              
             
<Link to="./home" > <li className="nav-li"  onClick={handleClickScroll} >Home</li> </Link>
<Link to="./About"><li className="nav-li"   onClick={handleClickScroll2}  >About</li></Link> 
<Link to="./Experience"><li className="nav-li"  onClick={handleClickScroll3}>Experience</li></Link>
<Link to="./Projects"><li className="nav-li"  onClick={handleClickScroll4}>Projects</li></Link>
<Link to="./Skills"><li className="nav-li"  onClick={handleClickScroll5}>Skills</li></Link>

    </ul>
   
      <h1  ><a className="my_name" href="/" >MW</a ></h1>
        </div>

    )
}



