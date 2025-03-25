import React from "react";
import "./Resume.css";
import { FaDownload, FaEye } from "react-icons/fa"; // Import icons
import resumePDF from "../assests/images/_sritharani_cse.pdf"; // Ensure the PDF is inside the 'assets' folder

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-title">Download My Resume</h2>
      
      <div className="resume-container">
       

        {/* Download & View Buttons */}
        <div className="resume-actions">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <button className="resume-btn view-btn">
              <FaEye className="icon" /> View Resume
            </button>
          </a>

          <a href={resumePDF} download="SriTharani_Resume.pdf">
            <button className="resume-btn download-btn">
              <FaDownload className="icon" /> Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
