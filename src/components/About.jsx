import React, { useEffect} from 'react'
import AboutImg2 from "../public/about-2.svg"
import 'aos/dist/aos.css'
import Aos from 'aos'

function About({aboutRef}) {
    useEffect(()=>{
        Aos.init({once:true})
    },[])
  return (
    <section data-aos="fade-up"  className='about-page' ref={aboutRef}>
        <div className='about-h2-container'>
            <h2>About Me.</h2>
            {/* <hr/> */}
        </div>
        <div className='about-description'>
            <div className='text-des'>
                <p className='my-des'>Hi there! My name is Omodaratan Oluwole Tony. A <span className='special'>flexible Software Engineer</span> with a <span className='special'>BSc in Computer Science</span>. A few years ago, I started on a journey that I never thought I would start, as I had other career paths planned for my future. Fast forward three years, and I’m still passionate about the choice I made to pursue software engineering. I am confident in my ability to tackle challenges and deliver high-quality work. My dedication and enthusiasm for this field drive me to continually improve and grow as a professional.</p>
                <p className='my-des'>When I’m not learning new tech or working on my latest project, you can find me listening to music or playing games.</p>

                <div className='btn-container'>
                  <button>Resume</button>
                </div>
                
                <div className='technologies-container'>
                    <p>Below are some of the technologies I've used recently</p>
                    <div className='tech-tools'>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                        <ul>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>AWS S3</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='image-des'>
                <img src={AboutImg2} />
            </div>
        </div>  
    </section>
  )
}

export default About
