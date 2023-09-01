import React from "react";

import "../pages/home.css"

export default function Experience(){
    
    return(
      
        <div className="container_experience" id="container_experience" >

            <h2 className="exp_hd" > Education and Work Experience </h2>
           <div className="education" >
                <h2 className="edu_hd" >Education</h2>
                <small className="small_list_primary"> 
                Primary school: 
                    <ul>
                    <li>Nairobi Primay(2000-2005)  </li>
                    <li>Kiambu Primary(2005-2008)</li>

                    </ul>
                    
                     </small>
                    
                     <small className="small_list_high"> 
                High school: 
                    <ul>
                    <li>Nairobi High(2009-2010)  </li>
                    <li>Kiambu High(2010-2011)</li>

                    </ul>
                    
                     </small>


                     
                    
                    <small className="small_list_uni"> 
               University: 
                   <ul>
                   <li>Kenyatta University(2012-2016)  </li>
                            <p>Bachelors Degree in Computer Science</p>

                   </ul>
                   
                    </small>


                     

           </div>
            <div className="work">
                <h4 className="work_hd"> Work Experience </h4>
               <small className="small_work" > 
<ul>
               <li className="list"> Safaricom: Internship (2017-2018)</li>
                    <p style={{color:"grey", fontStyle:"italic", width:"20rem"  }}> Worked with different groups such as Microsoft and Oracle Companies.</p>
                <br/>

                    <li className="list" > Microsoft: Software Testing  (2018-2021)</li>
                    <p style={{color:"grey", fontStyle:"italic", width:"20rem"  }}> Worked in the Software Testing Team.</p>
                    <br/>
                    <li className="list" > Oracle: Software Assuarance and Testing  (2021- )</li>
                    <p style={{color:"grey", fontStyle:"italic", width:"30rem"  }}> Works as  Software Tester.</p>

                </ul>
                </small> 

            </div>

        </div>

    )
}



