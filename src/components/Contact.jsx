import React, {useEffect, useState} from 'react'
import emailjs from "@emailjs/browser"
import {validate} from "react-email-validator"

import 'aos/dist/aos.css'
import Aos from 'aos'
import MailIcon from "../icons/MailIcon"

const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

function Contact({contactRef}) {

  const[formData, setFormData] = useState({name:"", email:"", message:""})

  const[apiRes, setApiRes] = useState({error:"", isSuccess:false, isLoading:false})
  
  const[isEmailValid, setIsEmailValid] = useState(true)

  function getFormData(e){
    e.preventDefault()

    setApiRes({error:"", isSuccess:false, isLoading:false})
    
    const{value, name} = e.target

    if(name === "email"){
      setIsEmailValid(true)
    }


    setFormData((prevData)=>{
      return {...prevData, [name]: value}
    })

  }
  
  async function sendMessage(e){
    e.preventDefault()

    if(!formData.email.trim() || !formData.name.trim() || !formData.message.trim()){
      return setApiRes({error:"all fields required", isSuccess:false, isLoading:false})
    }
    
    if(!validate(formData.email)){
      return setIsEmailValid(false)
    }

    if(!serviceID || !templateID || !publicKey){
      console.log("env variables not found!");
      return 
    }

    setApiRes({error:"", isSuccess:false, isLoading:true})

    const emailTemplate = {
      from_email: formData.email,
      from_name: formData.name,
      to_name:"Oluwole",
      message: formData.message
    }

    try{
      await emailjs.send(serviceID, templateID, emailTemplate, {
        publicKey
      })
      setApiRes({error:"", isLoading:false, isSuccess:true})
      setFormData({name:"", email:"", message:""})

    }catch(error){
      setApiRes({error:error.text, isLoading:false, isSuccess:false})
    }
  }

  useEffect(()=>{
        Aos.init({once:true})
    },[])

  return (
    <section data-aos="fade-up" className='contact' ref={contactRef}>
      <h2>Shoot me a message.</h2>
      <p>I am currently seeking an opportunity to gain my first job experience as a Software Developer.</p>
      <p className='text'>I'd love to work with you and your team.</p>

      <form className='form'>
        <div className='name-email-container'>
          <div className='container'>
            <label htmlFor='name'>Your Name</label>
            <input name='name' id='name' value={formData.name} type="text" placeHolder="Mark Zukerberg" onChange={getFormData} />
          </div>

          <div className='container'>
            <label htmlFor='email'>Your Email</label>
            <input type="email" value={formData.email} name='email' id='email' placeholder="Mark@Zukerberg.com" onChange={getFormData}  />
            {!isEmailValid && <small style={{color:"red", marginTop:".2em"}}>invalid email address</small>}
          </div>
          </div>

          <div className='message-container'>
            <label htmlFor='message'>Your Message</label>
            <textarea id='message' value={formData.message} name='message' className='message' placeholder='Hey, I am Mark and I would love to invite you for an interview' onChange={getFormData}  />
          </div>

          {apiRes.error && <small style={{color:"red", marginTop:"-1em", display:"flex", alignItems:"center", justifyContent:"center"}}>{apiRes.error}</small>}

          {apiRes.isSuccess && <small style={{color:"rgb(121, 246, 121)", display:"flex", alignItems:"center", justifyContent:"center", gap:".2em"}}><MailIcon/> Sent Successfully!</small>}

          <div className='button'>
           <button onClick={sendMessage}>{apiRes.isLoading?"Sending...": "Shoot!"}</button>
          </div>
      </form>
     
    </section>
  )
}

export default Contact
