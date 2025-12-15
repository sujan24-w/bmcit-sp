import React from 'react'
import "./contactus.css"
import Messagepic from "../../assets/msg-icon.png"
import Mailiico from "../../assets/mail-icon.png"
import Phoneico from "../../assets/phone-icon.png"
import Locatico from "../../assets/location-icon.png"
import ContactForm from './ContactForm'
function ContactUs() {
  return (
    <>

      <div className="contactus">
        <div className="leftc">

          <h3>Send Us a message <img src={Messagepic} alt="message  icon " /></h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <div className="c-icon">
            <p>info@bmc.edu.np</p>
            <img src={Mailiico} alt="email   icon " />
          </div>
          <div className="c-icon">
            <p>071570205</p>
            <img src={Phoneico} alt="phone call  icon " />
          </div>
          <div className="c-icon">
            <p> Siddharthanagar 32900, Parasi Road,Bhairahawa, Lumbini Province,Nepal</p>
            <img src={Locatico} alt="location pin  icon " />
          </div>


        </div>
        <div className=" leftc">
          <ContactForm />
        </div>

      </div>
    </>
  )
}

export default ContactUs
