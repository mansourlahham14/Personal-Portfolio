import React, { useState } from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from  "../../assets/mail_icon.svg"
import location_icon from  "../../assets/location_icon.svg"
import call_icon from  "../../assets/call_icon.svg"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "18651355-6563-4cfb-ad2e-fea998fa71be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Message sent successfully! We'll get back to you soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Error submitting form");
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to get in touch if you’re interested in working together or have a project in mind. I’m always open to new opportunities, collaborations, and ideas. Contact me via email and let’s build something great together.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>mansourlahham14@gmail.com</p>
                    </div>
                     <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+39 392 037 6473</p>
                    </div>
                     <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Milano, Italy</p>
                    </div> 
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required />
                <label htmlFor="">Write your message here</label>
               
                <textarea name="message" rows={8} placeholder='Enter your message' required></textarea>
                <button className='contact-submit' type='submit'>Submit now</button>
                {result && <span className="form-result">{result}</span>}
            </form>
        </div>
    </div>
  )
}

export default Contact