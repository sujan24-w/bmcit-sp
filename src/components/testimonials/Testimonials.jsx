import React, { useRef,useState } from 'react'
import Card from '../card/Card'
import "./testimonials.css"
import Sujan from "../../assets/sujan2.jpg"
import Backbtn from "../../assets/back-icon.png"
import Nextkbtn from "../../assets/next-icon.png"
import U1 from "../../assets/krishna-pic.jpg"
import U2 from "../../assets/sagar.JPG"
import U3 from "../../assets/SUJAN.jpg"
import U4 from "../../assets/user-4.png"
function Testimonials() {

   const slider= useRef();
 const[transx, setTransx]= useState(0)
const slideprev=()=>{
  if(transx < 0){
      setTransx( prev=>prev+20)
     }
    
    
}
 const slidenext=()=>{
   if(transx > -60){
        setTransx(prev=>prev-20)
     }
    

 }

  return (
    <>
    <div className="testimonials">
      <img src={Backbtn} alt="back btn icon" className="back-btn"  onClick={slideprev} />
      <img src={Nextkbtn} alt="next btn icon" className="next-btn" onClick={slidenext}   />
       <div className="slider">
        <ul ref={slider} style={{transform:`translateX(${transx}%)`}}>
          <li>  <Card  image={Sujan} name="Sujan Panthi" /></li>
          <li>  <Card image={U1} name="Krishna Nishad" /></li>
          <li>  <Card image={U2} name="Sagar Bhandari"  /></li>
          <li>  <Card  image={U3} name="SUJAN PANTHI"/></li>
          <li>  <Card  image={U4} name="William Jackson"/></li>
       
        </ul>
       </div>
    </div>
   
    </>
  )
}

export default Testimonials
