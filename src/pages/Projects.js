import React from 'react'
import "../pages/projcont.css";


export default function Projects() {
  return (
    <div className='container_project' id='container_project' >

        <h2 className='project_hd' >Projects</h2>
<div className='project_1' >
 
 <a href='https://github.com/Mikee100/moviewebsite2' target='blank' >
    <img src='/images/netflix.jfif' className='bank1'  alt=''  /> 
</a>

    <p className='yr' >2020</p>
    <p className='project_name' >Netflix Clone</p>


</div>

<div className='project_2' >
 
 <a href='https://github.com/Mikee100/utilitybank' target='blank' >
    <img src='/images/bank2.jpg' className='bankpic1'  alt=''  /> 
</a>

    <p className='yr' >2022</p>
    <p className='project_name' >Equity Bank System </p>


</div>


<div className='project_3' >
 
 <a href='https://github.com/Mikee100/mwanzobarakasystem' target='blank' >
    <img src='/images/bank3.jpg' className='bankpic1'  alt=''  /> 
</a>

    <p className='yr' >2023</p>
    <p className='project_name' >Mwanzo Baraka System </p>


</div>



    </div>
  )
}
