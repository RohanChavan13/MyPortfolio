import React from 'react'
import './Hero.css';
import profile2 from '../src/assets/profile2.jpg';

function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='hero-background'>
        <div className='hero-gradient'></div>
      </div>

      <div className='container'>
        <div className='hero-content'>
          <div className='hero-text'>
             <h1>Hi, I'm Rohan Chavan</h1>
            <h2>B.Tech CS Student passionate about learning and exploring new things</h2>
            <p>Every day in college teaches me something new inside and outside the classroom.</p>
           </div>

            <div className='hero-image'>
              <div className='profile-placeholder'>
                  <div className='profile-icon'><div className='circle'><img src={profile2}></img></div></div>
                <p>Student | Coder | Learner</p>
              </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Hero;
