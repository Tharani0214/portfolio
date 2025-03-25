import React from 'react';
import './Links.css';

// Import icon images
import LinkedinIcon from '../assests/images/Linkedin.png'; 
import GithubIcon from '../assests/images/Github.png';    
import PhoneIcon from '../assests/images/phone.png';       
import MailIcon from '../assests/images/Mail.png';         

const Links = () => (
    <section id="links" className="links">
        <h2>Links</h2>
        <div className="links-info">
            <button className="links-btn email-btn">
                <img src={MailIcon} alt="Email" />
                <a href="mailto:dharaniravichandran02@gmail.com">dharaniravichandran02@gmail.com</a>
                
            </button>

            <button className="links-btn phone-btn">
                <img src={PhoneIcon} alt="Phone" />
                <a href="tel:+918610039227">+91 8610039227</a>
            </button>
        </div>

        <div className="social-links-container">
            <button className="social-button linkedin-btn">
                <img src={LinkedinIcon} alt="LinkedIn" />
                <a href="https://linkedin.com/in/sritharani-r" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </button>
            <button className="social-button github-btn">
                <img src={GithubIcon} alt="GitHub" />
                <a href="https://github.com/Tharani0214" target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
        </div>
    </section>
);

export default Links;