import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap, FaNodeJs,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaRocket,FaDatabase, FaCogs, FaServer, FaPython
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiC, SiCplusplus ,SiExpress} from "react-icons/si";
import './Skill.css';

function Skill() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <FaPython /> }
      ]
    },
    {
      title: "Courses",
      skills: [
        { name: "Data Structures", icon: <FaDatabase /> },
        { name: "OOPs", icon: <FaCogs /> },
        { name: "DBMS", icon: <FaServer /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <FaCode /> }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem-Solving", icon: <FaLightbulb /> },
        { name: "Quick Learner", icon: <FaRocket /> },
        { name: "Team Collaboration", icon: <FaUsers /> }
      ]
    }
  ];
  return (
    <section id='skills' className='skill-section'>
      <div className='section-title'>
        <h2>Skills & Experties</h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className='skills-grid'>
        {skillCategories.map((category) => (
          <div className='skill-category'>
            <h3 className='category-title'>{category.title}</h3>
            <div className='skill-list'>
              {category.skills.map((skill) => (
                <div className='skill-card'>
                  <div className='skill-icon'>{skill.icon}</div>
                  <div className='skill-info'><h4>{skill.name}</h4></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>



    </section>
  )
}

export default Skill;
