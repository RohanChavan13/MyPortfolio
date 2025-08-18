import React from "react";
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

function App() {
 
  return (
    <>
     <div className='App'>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
     </div>
    </>
  );
}

export default App;
