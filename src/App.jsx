import {useRef, useState, useEffect} from "react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MailIcon from "./icons/MailIcon";
import Loader from "./components/Loader";

import 'aos/dist/aos.css'
import Aos from 'aos'


function App(){
  const [location, setLocation] = useState(window.location.hash)

  const [isDisplay, setIsDisplay] = useState(true)

  const aboutSection = useRef(null)
  const projectSection = useRef(null)
  const headerSection = useRef(null)
  const contactSection = useRef(null)

  useEffect(()=>{
        Aos.init()
    },[])

  function scrollToAbout(){
    if(aboutSection.current){
      setLocation("#about")
      window.scrollTo({top:aboutSection.current.offsetTop - 100, behavior:"smooth"})
    }
  }

 function scrollToProject(){
    if(projectSection.current){
      setLocation("#project")
      window.scrollTo({top:projectSection.current.offsetTop -100, behavior:"smooth"})
    }
  }

  function scrollToContact(){
    if(contactSection.current){
      setLocation("#contact")
      window.scrollTo({top:contactSection.current.offsetTop -100, behavior:"smooth"})
    }
  }

  useEffect(()=>{
     if(location === "#project"){
      scrollToProject()
    }
  }, [location, scrollToProject])

  useEffect(()=>{
     if(location === "#about"){
      scrollToAbout()
    }
  }, [location, scrollToAbout])

  useEffect(()=>{
     if(location === "#contact"){
      scrollToContact()
    }
  }, [location, scrollToContact])

  useEffect(()=>{
    //creating timeout for the initial loader
    const timeout = setTimeout(()=>{
      setIsDisplay(false)
    }, 2000)

    return ()=>{
      clearTimeout(timeout)
    }
  }, [isDisplay])

if(isDisplay){
  return(
  <Loader/>
  )
}
 
return (
  <main>
    <Header headerRef={headerSection} scrollToAbout={scrollToAbout} scrollToProject={scrollToProject} scrollToContact={scrollToContact}/>
    <div className="landing-container">
      {/* <div className="landing-container"> */}
        <Hero/>
        <About aboutRef={aboutSection}/>
        <Projects projectRef={projectSection} />
        <Contact contactRef={contactSection} />
        <Footer />
      {/* </div> */}
    </div>
    <div className="mailbox">
        <a href="mailto:omodaratantony@gmail.com" className="info"><MailIcon /> omodaratantony@gmail.com</a>
      </div>
  </main>
  )
}

export default App