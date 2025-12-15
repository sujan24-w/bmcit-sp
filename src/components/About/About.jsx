import React, { useState } from 'react'
import AboutLeft from "../../assets/about.png"
import PlayIcon from "../../assets/play-icon.png"
import "./about.css"
import Videoplay from '../Videoplayer/Videoplay'
function About() {

const[playstate,setPlayState]= useState(false);

   const CollageDemoVideo =()=>{
     setPlayState(prev=> !prev
   );
   }
   return (
      <>
         <div className="about">
            <div className="about-left">
               <img className='left-image' src={AboutLeft} alt="about  sec image" />
               <img className='play-image' src={PlayIcon} alt="about  sec play icon" onClick={CollageDemoVideo} />

            </div>
            <div className="about-right">

               <h4>About University</h4>
               <h1>Nurturing Tomorrow's Leaders Today</h1>
               <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
               <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
               <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
            <Videoplay changeclass={playstate} setPlayState={setPlayState} />
         </div>
      </>
   )
}

export default About
