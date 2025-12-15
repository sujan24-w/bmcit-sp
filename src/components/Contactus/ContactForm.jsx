import React, { useState } from 'react'
import "./contactus.css"
import Nextarrow from "../../assets/next-icon.png"
function ContactForm() {
  
  const  [result,setResult]=useState("");

   const submits= async(e)=>{
    e.preventDefault();
    setResult("Sending Email...............");
    const formvals=e.currentTarget;
    const formData= new FormData(formvals);
      formData.append("access_key", "cc3488ff-268a-42c7-8107-f50299cd7965");
       
      const res= await fetch("https://api.web3forms.com/submit",{
        method:"POST",
        body:formData
      });

      const data= await res.json();
      console.log(data.success)
      if(data.success){
         setResult("Form Submitted Successfully")
         formvals.reset()

      }else{
        console.log("Error",data)
         setResult(data.message);

      }
     
   };

  return (
    <>
    <form  onSubmit={submits} >
    <div className="formele">

     <label htmlFor="name"> Your Name</label>
     <input type="text" name='name' id='name' placeholder='Enter your name'  required/>
    </div>
     
    <div className="formele">
     <label htmlFor="phone">Phone Number</label>
     <input type="text" name='phone' id='phone' placeholder='Enter your Phone Number' required />
    </div>
    <div className="formele">
     <label htmlFor="email"> Your Email</label>
     <input type="email" name='email' id='email' placeholder='Enter your Email' required />
    </div>
    <div className="formele">
     <label htmlFor="message">Write Your Message</label>
     <textarea name="Message" id="message"  placeholder='Enter your Message' rows="10" required></textarea>
     
    </div>
    <button className='btnc  sub-s-btn' type='submit'>Submit now <img src={Nextarrow} alt="next arrow" /></button>
    </form>
    <p>{result}</p>
    </>
  )
}

export default ContactForm
