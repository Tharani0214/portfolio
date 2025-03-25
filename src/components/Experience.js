import React from 'react';
import './Experience.css'; // Ensure you create and add this CSS file

const Experience = () => (
  <section id="experience" className="experiance">
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experience-card">
        <h3>Web Developer Intern</h3>
        <p className="company">Zed Digital, Coimbatore</p>
        <p className="duration">(June 2023 – September 2023)</p>
        <ul>
          <li>Developed web applications using React.js.</li>
          <li>Optimized WordPress plugins and collaborated with backend teams for API integration using C#.</li>
          <li>Automated data collection and insights using Python-based web scraping.</li>
          <li>Worked with site map analysis and quality check for those site maps (RTA).</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
