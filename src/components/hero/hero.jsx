import React from "react";
import { Link } from "react-scroll";
import "./hero.css";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/images/image.png";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-greeting"
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#e11d48", marginBottom: "24px" }}>
            <span>Hello, I'm</span>
          </div>

          <div className="hero-title"
            style={{ fontSize: "5rem", fontWeight: "900", marginBottom: "36px", lineHeight: "1.1" }}>
            <Typewriter
              words={['Farhia Abdi ', 'Web Developer', 'Designer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </div>

          <p className="hero-desc"
            style={{ fontSize: "1.5rem", color: "#d1d5db", marginBottom: "36px" }}>
            Hello, my name is Farhia Abdi. I'm a front-end web developer.
          </p>

          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500}>
              <button className="hire-btn">Contact Me</button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
