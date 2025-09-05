import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';
import { motion } from "motion/react"
import Leetcode from "./Leetcode";

function Contact() {

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohan-chavan-aabb2733a/',
      icon: <FaLinkedin />,
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/RohanChavan13',
      icon: <FaGithub />,
      color: '#333'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rohanchavan_313/',
      icon: <FaInstagram />,
      color: '#E4405F'
    },
   {
    name: "LeetCode",
    url: "https://leetcode.com/u/rohanchavan_313/", // replace with your profile
    icon: <Leetcode />,
    color: "#FFA116", // official LeetCode orange
  }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div id='cont' className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities, interesting projects,
                and meaningful collaborations. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>chavanrohan7666@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 94058 51598</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social) => (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--social-color': social.color }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <h3>Send Message</h3>
              <form className="contact-form">
                <div className="form-group" >
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    style={{ color: 'var(--cnt-formt)' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    style={{ color: 'var(--cnt-formt)' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    style={{ color: 'var(--cnt-formt)' }}
                  ></textarea>
                </div>

                <motion.button
                  // whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.7 }}
                  type="submit"
                  className="btn btn-primary submit-btn"
                >Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
