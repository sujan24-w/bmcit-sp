import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./index.css"
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Programs/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import ContactUs from './components/Contactus/ContactUs'
import Footer from './components/Footer/Footer'
function App() {
  return (
   <>
 <Navbar/>
 <Hero/>
 <div className="container">
  <Title nameclass="program" subtitile="Our Program"  heading="What we Offer" />
 < Program/>
 <About/>
  <Title  subtitile="Gallery"  heading="Campus Photos" />
  <Campus/>
   <Title nameclass="testimonial" subtitile="Testimonials"  heading="What Student Says" />
   <Testimonials/>
 
  <Title  subtitile="Contact Us"  heading="Get in touch" />
   <ContactUs/>
   <Footer/>
 </div>
   </>
  )
}

export default App
