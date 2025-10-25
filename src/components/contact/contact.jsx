import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm currently looking for new opportunities, and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to
            get back to you!
          </p>
          <div className="social-icons">
            <a href="https://github.com/fariha-44/fariha-44" target="_blank" rel="noopener noreferrer">
              <FaGithub size={35} />
            </a>
            <a href="https://www.linkedin.com/in/farhia-abdi-hasan-987b95371
" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form">
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
