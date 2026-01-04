import React from 'react'
import './Hero.css'
import IMG_3527 from "../../assets/IMG_3527.jpeg";


const Hero = () => {
  return (
    <div className="hero">
<img src={IMG_3527} alt="" />
<h1>
    <span>im mansour</span> and i build things for the web
</h1>
<p>DESCRIZIONE DI ME</p>
<div className='hero-action'>
    <div className='hero-connect'>Connect with me</div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero