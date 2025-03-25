import React from 'react';
import './Header.css';
import profilePic from '../assests/images/profile-pic.jpeg';


const Header = () => (
  <header className="header">
    
      <div className="header-info">
        <h2 className="typewriter name">DHARSHH!!</h2>
      </div>

    

      <div className="quote-container">
        <div className="cloud-container">
          <p className="quote-text">
            "The best way to predict the future is to create it"
            <br />
            <span className="quote-author">- Abraham Lincoln</span>
          </p>
        
        </div>
      
      </div>
     
      <div className="profile-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
  </header>
);

export default Header;
