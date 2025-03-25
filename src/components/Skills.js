import React from 'react';
import { FaPython, FaCuttlefish, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCode, FaLaptopCode, FaWordpress, FaMicrosoft } from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <FaCuttlefish /> }
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Next.js", icon: <FaLaptopCode /> }
    ]
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <FaDatabase /> }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "MS-Excel", icon: <FaMicrosoft /> },
      { name: "MS-Office", icon: <FaMicrosoft /> }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="skills">
    <h2 className="skills-title">Technical Skills</h2>
    <div className="skills-container">
      {skillsData.map((skillCategory, index) => (
        <div key={index} className="skill-card">
          <h3>{skillCategory.category}</h3>
          <ul>
            {skillCategory.skills.map((skill, i) => (
              <li key={i}>
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
