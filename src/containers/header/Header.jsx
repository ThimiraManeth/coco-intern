import React from 'react';
import './header.css';
import background from '../../assets/background.jpg';



const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Coconut Pest and Disease Surveillance System</h1>
        <button className="gpt3__header-learn-more">Learn More</button>
          
      </div>
      <div className="gpt3__header-image">
            <img src={background} alt="ai" />
          </div>
      </div>
  )
}

export default Header