import React, { useState } from 'react';
import './navbar.css';


function Navbar() {
  const [showProjectScope, setShowProjectScope] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);

  const toggleProjectScope = () => {
    setShowProjectScope(!showProjectScope);
  };

  const toggleDownloads = () => {
    setShowDownloads(!showDownloads);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">CocoRemedy</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <span className="nav-link-button" onClick={toggleProjectScope}>
            Project Scope
          </span>
          {showProjectScope && (
            <ul className="dropdown-menu">
              <li>
                <a href="#Features">Literature Survey</a>
              </li>
              <li>
                <a href="#Whatis">Research Gap</a>
              </li>
              <li>
                <a href="#Blog">Research Problem & Solution</a>
              </li>
              <li>
                <a href="#possibility">Research Objectives</a>
              </li>
              <li>
                <a href="#Cta">Methodology</a>
              </li>
              <li>
                <a href="#Brand">Technologies</a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="/milestones" className="nav-link">Milestones</a>
        </li>
        <li className="nav-item">
          <span className="nav-link-button" onClick={toggleDownloads}>
            Downloads
          </span>
          {showDownloads && (
            <ul className="dropdown-menu">
              
              <li>
                <a href="/user-manual">Documents</a>
              </li>
              <li>
                <a href="/case-studies">Presentations</a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/achievements" className="nav-link">Achievements</a>
        </li>
        
        
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
