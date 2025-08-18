import React from 'react'
import './About.css';
import profile from './assets/profile.jpg';

function About() {
  return (
   <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am currently pursuing B.Tech in Computer Science at VIT Pune with a CGPA of 9.07. 
              I have strong skills in HTML, CSS, JavaScript, and frontend development. 
              I have a hunger to learn modern web technologies, AI, and Generative AI.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">B.Tech Computer Science</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Institution:</span>
                <span className="detail-value">VIT Pune</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">CGPA:</span>
                <span className="detail-value">9.07</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Focus Areas:</span>
                <span className="detail-value">Web Development, AI, Generative AI</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-placeholder-large">
                <img src={profile}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
