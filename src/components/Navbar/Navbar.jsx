import React, {useState, useEffect } from 'react'
import "./navbar.css"
import Logoimg from "../../assets/logo.png"
import Menuicon from "../../assets/menu-icon.png"
 import {Link } from "react-scroll"
function Navbar() {

  const [changecolor,setChangeColor]= useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY> 60 ? setChangeColor(true): setChangeColor(false)
    })
  },[])
  const[menuOpen,setMenuOpen]=useState(false)
const togglemenuicon= ()=>{
  setMenuOpen(!menuOpen);
   
}

  return (
  
    <nav  className={`container  ${changecolor &&  "color-nav" }` }>
      <Link  to="hero-container"  smooth={true} offset={0} duration={500} >
      <img  className="logo-img" src={Logoimg} alt="Logo image" />
      </Link>
    
   
  

      <ul className={!menuOpen? "togglemenu" : "" }>
        <li><Link  to="hero-container"  smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link  to="program"  smooth={true} offset={-100} duration={500}>Program</Link></li>
        <li><Link  to="about"  smooth={true} offset={-170} duration={500}>About Us</Link></li>
        <li><Link  to="gallery"  smooth={true} offset={-295} duration={500}>Campus</Link></li>
        <li><Link  to="testimonial"  smooth={true} offset={-150} duration={500}>Testimonials</Link></li>
        <li> <Link  to="contactus"  smooth={true} offset={-295} duration={500} className='btn'>Contact Us</Link></li>
      </ul>

    <img src={Menuicon} alt="menu icon" className={"menu-icon"} onClick={togglemenuicon} />
    </nav>
    
  )
}

export default Navbar
