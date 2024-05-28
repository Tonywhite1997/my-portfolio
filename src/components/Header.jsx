import React, { useState, useEffect } from "react";

function Header({ scrollToAbout, scrollToProject, headerRef, scrollToContact }) {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(()=>{
    const handleResize = ()=>{
       setWindowWidth(window.innerWidth)
    }

     window.addEventListener("resize", handleResize)
   
    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[windowWidth])

  function closeNav(){
     return setIsNavOpen((prevState)=>!prevState)
  }

  return (
    <header ref={headerRef} className={`header ${!isNavOpen && isScrollingDown ? 'hidden' : ''}`}>
      <a href="/" className="logo">
        <p className="name">&#123;olúwọlé&#125;</p>
      </a>
      <nav className={isNavOpen? "nav" : "hidden"}>
        <ul>
          <a href="/#about" onClick={closeNav}>
            <li onClick={scrollToAbout}>About</li>
          </a>

          <a href="/#project" onClick={closeNav}>
            <li onClick={scrollToProject}>Projects</li>
          </a>

          <a href="/#contact" onClick={closeNav}>
            <li onClick={scrollToContact}>Contact</li>
          </a>

          <button>Resume</button>
        </ul>
      </nav>
      <div className={`bars-container ${windowWidth < 751? "show" : " "}`} onClick={()=>{
        setIsNavOpen((prevState)=>!prevState)
      }}>
        <div className={isNavOpen?"bars-hidden" : "bars"}>
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

