import React, {useEffect} from 'react'

import 'aos/dist/aos.css'
import Aos from 'aos'

function Contact({contactRef}) {

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
            <label>Your Name</label>
            <input type="text" placeHolder="Mark Zukerberg" />
          </div>
          <div className='container'>
            <label>Your Email</label>
            <input type="email" placeHolder="Mark@Zukerberg.com" />
          </div>
          </div>
          <div className='message-container'>
            <label>Your Message</label>
            <textarea className='message' placeholder='Hey, I am Mark and I would love to invite you for an interview' />
          </div>
          <div className='button'>
           <button>Shoot!</button>
          </div>
      </form>
     
    </section>
  )
}

export default Contact
