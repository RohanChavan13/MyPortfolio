import React from 'react'
import './About.css';

import { motion } from "motion/react"

import png from './assets/png.png';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <motion.div
            initial={{z:1000,opacity: 0 }}

            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut"
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="about-text">
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
          </motion.div>

          <div className="about-image">
            <motion.img
              animate={{ y: 10 }}   // animate up and down
              transition={{
                duration: 2,
                repeat: Infinity,       // infinite loop
                repeatType: "reverse",  // like GSAP's yoyo
                ease: "easeInOut"
              }}
              src={png} alt="About Me" className="profile-image" ></motion.img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
