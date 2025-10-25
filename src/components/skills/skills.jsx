import React from "react";
import "./skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaFigma } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 color="#e34f26" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt color="#264de4" /> },
    { name: "JavaScript", level: 85, icon: <FaJs color="#f7df1e" /> },
    { name: "React", level: 80, icon: <FaReact color="#61dafb" /> },
    { name: "Python", level: 70, icon: <FaPython color="#3776ab" /> },
    { name: "Desing", level: 88, icon: <FaFigma color="#a259ff" /> },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My <span>Skills</span></h2>
        <p className="skills-desc">
          Here are the technologies and tools I use to design and build modern, responsive, and creative projects.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
