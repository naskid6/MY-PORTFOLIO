import React from 'react'
import './section.css'
function Section() {
  return (
    <>
    <section className='home'>
   
 <div className="home-text">
 <h2>hello my name is </h2>
  <h1>NASIRU SURAJU  <span>MOHAMMED</span></h1>

  <p>iam a website developer with two years experience ,<br/>i design all
     type of website 
    be it company i also tutor<br/> people on 
    html,css, javascript and website developing  you can contact me on<br/> this social 
    media platform twitter,instgram ,facebook, linkedin and snapchat </p>
    <div className="hom-btn">
    <a href="index.html" className='btn'>Download Cv </a>
      <a href="index.html" className='btn'> Lets Talk </a>
    </div>
 </div>

<div className="share">
  <p>My social Media Contact</p>
  <div className="social">
    
  <i className="fa-brands fa-facebook-f"></i>
    <i className="fa-brands fa-twitter"></i>
    <i className="fa-brands fa-tiktok"></i>
  </div>
</div>
   
    </section>
 
   


  
    </>
  )
}

export default Section;