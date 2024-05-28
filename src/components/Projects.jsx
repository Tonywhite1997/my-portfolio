import React from 'react'
import MiniCloud from "../public/minicloud.png"
import MyPortfolio from "../public/my-portfolio.png"
import Link from '../icons/Link'
import Github from '../icons/Github'

function Projects({projectRef}) {
  return (
    <section className='project' ref={projectRef}>
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
            <p className='notice'>PS: free <span className='render'>Render</span> is used to host the backend server so the load time might take few minutes initially.</p>
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
            <p className='project-description'>This is my personal portfolio that showcases my skills and my previous projects. It makes it easier for people to see me and read a little about me. It also contains my Resumme that is downloadable </p>
            <div className='tech-used'>
                <small>JavaScript, React, SCSS </small>
            </div>
    
            <div className='link-and-git-container'>
                {/* <a title='project link' href='https://miniycloud.netlify.app' target="_blank">
                    <Link/>
                </a> */}

                <a title='project git repo' href='https://github.com/Tonywhite1997/mini-cloud-frontend' target="_blank">
                    <Github />
                </a>

                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
