import React from "react";
import "./about.css";
import aboutpic from "../../assets/images/aboutpic.jpeg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutpic} alt="About Me" className="about-img" />
        </div>
        
        {/* Right: Text */}
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-desc">
            Hello! I’m <strong>Farhia</strong>, a passionate <strong>Front-End Developer</strong> with a creative mind and a love for crafting beautiful, user-friendly websites.
            I specialize in <strong>HTML, CSS, JavaScript, and React</strong>, and I enjoy bringing ideas to life through clean design and smooth functionality.  
            I’m always exploring new technologies and improving my skills to build digital experiences that stand out.
          </p>
        </div>

      </div>
    </section>
  );
}
