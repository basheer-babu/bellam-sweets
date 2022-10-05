import React from "react";
import "./styles.css";
import bannerImg from "./banner.png";
import Logo from "../../common/Logo";
import Typewriter from 'typewriter-effect';
import Carousel from "./Carousel";

import {isMobile} from 'react-device-detect';
import Navbar from "../../NavBar";


const Banner = ({ handleScrollMenu }) => (
  <>
  
  <div className="header">
  
    <div className="header-content">
      <Logo />
      
      
      <div className="content-main">
        {/* <h1 className="title">Welcome to Bellam Sweets</h1> */}
        <h1 className='title'>Delicious food for your cravings</h1>
        {/* <h4>We made fresh and healthy meals with different recipes</h4> */}
        <h4>
        <Typewriter
          options={{
            strings: ["Welcome to Bellam Sweets!","We made fresh and healthy food with jaggery"],
            autoStart: true,
            loop: true,
            delay:40
          }}
        /></h4>
        <button onClick={handleScrollMenu}>
          View Menu <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </div>
    {console.log(isMobile)}
    {isMobile? <img className="header-img" src={bannerImg} alt="banner" />:
    <div className="header-img">
            <Carousel/>
          </div>
    }
    
    </div>
  
  </>
);

export default Banner;
