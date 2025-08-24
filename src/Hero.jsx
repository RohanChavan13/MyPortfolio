import React from 'react'
import './Hero.css';
import profile2 from '../src/assets/profile2.jpg';
import { motion } from "motion/react"

function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='hero-background'>
        <div className='hero-gradient'></div>
      </div>

      <div className='container'>
        <div className='hero-content'>
          <div className='hero-text'>
            <motion.h1
              initial={{ opacity: 0, y: 150, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >Hi, I'm Rohan Chavan</motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 150, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
            >B.Tech CS Student passionate about learning and exploring new things</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 150, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
            >Every day in college teaches me something new inside and outside the classroom.</motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0,y:250 }}
            animate={{ opacity: 1 ,y:0}}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            className='hero-image'>
            <div className='profile-placeholder'>
              <div className='profile-icon'><div className='circle'><img src={profile2}></img></div></div>
              <p>Student | Coder | Learner</p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero;
