import React from 'react';
import './Certifications.css';

const Certifications = () => (
  <section id="certifications" className="certifications">
    <h2>Licenses & Certifications</h2>
    <div className="certifications-grid">
    <div className="certification-card">
        <h3>Web Development with React JS</h3>
        <span>Sirius Computer Solutions</span>
        <p>Skills: React.js, HTML, CSS, Node.js</p>
      </div>

      <div className="certification-card">
        <h3>Introduction to Pandas</h3>
        <span>LeetCode - Badges </span>
      </div>

      <div className="certification-card">
        <h3>MySQL Basics</h3>
        <span>Great Learning</span>
        <p>Skills: MySQL, Joins, Subqueries, DBMS</p>
      </div>

      <div className="certification-card">
        <h3>Python</h3>
        <span>HackerRank</span>
      </div>

      <div className="certification-card">
        <h3>Data Analytics using Excel</h3>
        <span>Great Learning</span>
        <p>Skills: Data Visualization, DBMS, Excel, Data Analytics, Data Cleaning, Pivot Tables</p>
      </div>

      
    </div>
  </section>
);

export default Certifications;
