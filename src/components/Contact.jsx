import React from 'react'

function Contact({contactRef}) {
  return (
    <section className='contact' ref={contactRef}>
      <h2>Shoot me a message.</h2>
      <p>I am currently seeking an opportunity to gain my first job experience as a Software Developer.</p>
      <p className='text'>I'd love to work with you and your team.</p>
      <a href='mailto:omodaratantony@gmail.com'>Get in touch</a>
    </section>
  )
}

export default Contact
