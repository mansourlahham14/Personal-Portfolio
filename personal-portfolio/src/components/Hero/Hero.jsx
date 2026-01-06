import React from 'react'
import './Hero.css'
import IMG_3527 from "../../assets/IMG_3527.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll"


const Hero = () => {
  return (
    <div id='home' className="hero">
<img src={IMG_3527} alt="" />
<h1>
    <span>I'm Mansour Lahham</span>, Frontend Developer based in Italy 
</h1>
<p>I'am a front-end developer from Milano, Italy specialized in building modern, high-performance interfaces. I turn ideas into intuitive, accessible, and functional digital experiences.

Preferisco questa risposta</p>
<div className='hero-action'>
    <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero