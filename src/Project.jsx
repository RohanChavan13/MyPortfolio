import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import './Project.css';
import cricket from "./assets/cricket.jpeg";
import pneumonia from "./assets/pneumonia.png";
import auction from "./assets/auction.jpg";
import jarvis from "./assets/jarvis.jpeg";



const Projects = () => {
  const projects = [
    {
      title: "Pneumonia Detection Frontend",
      description: "A simple and user-friendly web interface for pneumonia detection where users can upload chest X-ray images. The system connects to a backend API for AI-based predictions and displays results clearly.",
      image: pneumonia,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
      github: "https://github.com/rohanchavan/pneumonia-detection-frontend",
      demo: "https://pneumonia-frontend.rohanchavan.com",
      category: "Frontend Development"
    },
    {
      title: "Cricket Website",
      description: "A responsive cricket website showing live scores, player stats, and match schedules using a public cricket API. Built with Bootstrap for styling and JavaScript for real-time updates.",
      image: cricket,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
      github: "https://github.com/rohanchavan/cricket-website",
      demo: "https://cricket.rohanchavan.com",
      category: "Web Development"
    },
    {
      title: "Online Auction System",
      description: "A comprehensive online auction platform built with Django and OpenCV for image processing and user authentication. Features real-time bidding, secure payment integration, and admin dashboard.",
      image: auction,
      techStack: ["Django", "OpenCV", "Python", "HTML/CSS", "JavaScript"],
      github: "https://github.com/rohanchavan/auction-system",
      demo: "https://auction-demo.rohanchavan.com",
      category: "Web Development"
    },
    {
      title: "JARVIS-like Voice Assistant",
      description: "A personal voice assistant inspired by Iron Man's JARVIS, capable of voice commands, task automation, web searches, and smart home control using speech recognition and text-to-speech. But it is on the way!",
      image: jarvis,
      techStack: ["Python", "Speech Recognition", "Text-to-Speech", "APIs", "Automation"],
      github: "https://github.com/rohanchavan/jarvis-assistant",
      demo: "https://jarvis-demo.rohanchavan.com",
      category: "AI & Automation"
    }

  ]

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Some of my recent work and experiments</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <img src={project.image}></img>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <button
                        className="project-link-btn"
                        onClick={() => handleProjectClick(project.github)}
                        title="View on GitHub"
                      >
                        <FaGithub />
                      </button>
                    )}
                    {project.demo && (
                      <button
                        className="project-link-btn"
                        onClick={() => handleProjectClick(project.demo)}
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.github && (
                    <button
                      className="btn btn-outline project-action-btn"
                      onClick={() => handleProjectClick(project.github)}
                    >
                      <FaGithub /> View Code
                    </button>
                  )}
                  {project.demo && (
                    <button
                      className="btn btn-primary project-action-btn"
                      onClick={() => handleProjectClick(project.demo)}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

