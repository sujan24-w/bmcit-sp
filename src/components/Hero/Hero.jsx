import React from 'react'
import "./Hero.css"
import Darkarrow from "../../assets/dark-arrow.png"
function Hero() {
  return (
   <>
     <div   className="hero-container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicinggnissimos dolor, necessitatibus dicta doloribus corrupti nemo corporis.</p>
       <button className='btn'>Explore More <img src={Darkarrow} alt="dark arrow   explore more" /> </button>
      </div>

     </div>
   </>
  )
}

export default Hero
