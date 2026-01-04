import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import IMG_3527 from "../../assets/IMG_3527.jpeg";

const About = () => {
  return (
    <div className="about">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis accusamus blanditiis facere a ullam recusandae repellat eos
              nesciunt! Dolorum aliquam nisi et ea ut laboriosam repudiandae
              doloribus id. Eum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              iusto asperiores doloribus impedit voluptatem, vero cupiditate
              doloremque nulla! Ipsam, mollitia.
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
<h1>10+</h1>
<p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>90+</h1>
<p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>15+</h1>
<p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
