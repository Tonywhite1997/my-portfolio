import React, {useEffect} from 'react'
import MiniCloud from "../public/minicloud.png"
import MyPortfolio from "../public/my-portfolio.png"
import Link from '../icons/Link'
import Github from '../icons/Github'

import 'aos/dist/aos.css'
import Aos from 'aos'

function Projects({projectRef}) {

    useEffect(()=>{
        Aos.init({once:true})
    },[])

  return (
    <section data-aos="zoom-in" className='project' ref={projectRef}>
      <div className='project-h2-container'>
            <h2>My Projects.</h2>
      </div>
      <div className='project-info-container'>
        <div className='project-screenshot'>
            <img src={MiniCloud} alt="minicloud website screenshot" />
        </div>
        <div className='project-info'>
            <h4 className='project-name'>01. MiniCloud</h4>
            <p className='project-description'>Just a simple storage software. stores images, audios, videos, pdfs and more. Allows file sharing between users, notifications are sent with the help of Socket.io, emails are sent with NodeMailer and files can be grouped into folders.</p>
            <div className='tech-used'>
                <small>TypeScript, React, SCSS, NodeJS, Express, MongoDB, AWS S3, NodeMailer, Socket.io</small>
            </div>
            <p className='notice'>PS:<span className='render'>Render's free tier</span> is used to host the backend server, so the initial load time might take a few minutes.</p>
            <div className='link-and-git-container'>
                <a title='project link' href='https://miniycloud.netlify.app' target="_blank">
                    <Link/>
                </a>

                <a title='project git repo' href='https://github.com/Tonywhite1997/mini-cloud-frontend' target="_blank">
                    <Github />
                </a>

                
            </div>
        </div>
      </div>

      {/*second project*/}

      <div className='project-info-container'>
        <div className='project-screenshot'>
            <img src={MyPortfolio} alt="my portfolio screenshot" />
        </div>
        <div className='project-info'>
            <h4 className='project-name'>02. My Portfolio</h4>
            <p className='project-description'>This is my personal portfolio, designed to showcase my skills and previous projects. It provides an easy way for people to learn about me and my work. Additionally, it includes my resume, which is available for download.</p>
            <div className='tech-used'>
                <small>JavaScript, React, SCSS</small>
            </div>
    
            <div className='link-and-git-container'>

                <a title='project git repo' href='https://github.com/Tonywhite1997/my-portfolio' target="_blank">
                    <Github />
                </a>

                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
