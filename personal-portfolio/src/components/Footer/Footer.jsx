import React from 'react'
import "./Footer.css"
import user_icon from "../../assets/user_icon.svg"
import logoMans from "../../assets/logoMans.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={logoMans} alt="" />
            <p>I'm Mansour Lahham, Frontend Developer based in Italy</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder='Enter you email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">© 2026 Mansour Lahham.</p>
          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer