import React from "react";
import "./project.css";

export default function Projects() {
  const projects = [
    {
      title: "Speed Typing Game",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      description:
        "A fun typing game built with JavaScript that tests your typing speed.",
      link: "https://fariha-44.github.io/typin-game-/",
    },
    {
      title: "Attendance Tracker",
      image:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      description:
        "A smart web app to manage and track student attendance easily.",
      link: "https://fariha-44.github.io/student-attendence-tracker/",
    },
    {
      title: "Arrow Slider",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      description:
        "An elegant image slider built with HTML, CSS, and JavaScript.",
      link: "https://fariha-44.github.io/arrow-slider-/",
    },
    {
      title: "E-Commerce Website",
        image:"https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80  ",    

      description:
        "A modern e-commerce website with stunning visuals and smooth animations.",
      link: "https://fariha-44.github.io/eco/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
