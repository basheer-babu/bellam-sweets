import React from 'react';
import logo from './BSlogo.ico';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo'/>
      <span>
        <b>Bellam Sweets</b>
      </span>
    </div>
    <p style={{display:'inline-block'}}>
      <b>healthy place</b>
    </p>
  </div>
);

export default Logo;
