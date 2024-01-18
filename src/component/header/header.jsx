import React from 'react'
import './header.css'
import img from '../../images/Snapchat-1574182479.jpg'

function Header() {
  return (
    <>
    <div className="container">
      <img src={img} alt="naskid.png" />
      <div className="text">
        <h1>ABOUT <span>ME</span></h1>
        <h2>Frontend Developer</h2>
        <p>iam a website developer with two years experience ,<br/> i design all type of website 
         be it company i also tutor people on  html,css,<br/> javascript and website developing  you can contact me on this social 
    media platform<br/> twitter,instgram ,facebook, linkedin and snapchat </p>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Header;