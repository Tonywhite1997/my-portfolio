import React from 'react'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'

function Footer() {
  return (
    <footer className='footer'>
      <small>&copy;Designed & Built by Omodaratan Oluwole Tony</small>
      <div className='socials'>
        <a href='https://github.com/Tonywhite1997' target="_blank">
          <Github />
        </a>
        <a href='https://www.linkedin.com/in/omodaratan-tony-067300b6/' target="_blank">
          <Linkedin/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
