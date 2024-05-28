import React from 'react'
import Programmer from "../public/programmer.svg"

function Hero() {

  return (
    <section className='hero-section'>
      <h1 className='hero-title'>A Software Engineer</h1>
      <p className='hero-text'>I listen, ask questions, do thorough research, design efficient solutions tailored to your requirements and then build exactly what you want beautifully while still staying on time!  </p>
      <div className='programmer'>
        <img src={Programmer} />
      </div>
    </section>
  )
}

export default Hero
