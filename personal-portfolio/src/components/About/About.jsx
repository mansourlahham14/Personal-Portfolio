import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import IMG_3527 from "../../assets/IMG_3527.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={IMG_3527} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a front-end developer focused on building clean, modern, and performant web experiences. 
              I enjoy transforming ideas into intuitive interfaces using current web technologies, with strong 
              attention to detail, responsiveness, and code quality. 
              
            </p>
            <p>
              I strive to create digital products that are reliable, scalable, and user-friendly,
               always aiming to improve and stay up to date with the evolving web ecosystem.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>
                HTML & CSS
              </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>
                React JS
              </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>
                JavaScript
              </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>
                Next JS
              </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
<h1>1+</h1>
<p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>9+</h1>
<p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>4+</h1>
<p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
