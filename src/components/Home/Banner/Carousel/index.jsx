import React from "react";
import CarouselSlider from "react-carousel-slider";
import bannerImg from "../banner.png";
import bslogo from "./output-onlinepngtools.png";
import bs1 from "./bs1.png";
import bs2 from "./jilabi.png";


let h1Style = {
  textAlign: "left",
  top: "10%",
  width: "auto",
  background: "transparent",
  fontSize: "2em"
};

let h1Style2 = {
  textAlign: "left",
  top: "10%",
  width: "auto",
  background: "transparent",
  fontSize: "2em",
  color: "black"
};

let element1 = (
  <div className="imtxt">
    {window.innerWidth > 700 ? (
      <img src={bs2} />
    ) : (
      <img src="https://preview.ibb.co/fuL4BS/learn_fast.jpg" />
    )}
    <p style={h1Style}>Works Hard</p>
    <p>I don't give up until I've figured it out.</p>
  </div>
);

let element2 = (
  <div id="imtxt2" className="imtxt">
    {/* <img src="https://preview.ibb.co/ejUbRS/Webp_net_resizeimage_1.jpg" /> */}
    <img src={bannerImg}/>

    <p style={h1Style2}>Awesome Skills</p>
    <p>I love to code, and I'm great at it.</p>
  </div>
);

let element3 = (
  <div className="imtxt">
    {/* <img src="https://preview.ibb.co/fuL4BS/learn_fast.jpg" /> */}
    <img src={bslogo} />

    <p style={h1Style}>Fast Learner</p>
    <p>I'm a fast learner and excited to learn new things.</p>
  </div>
);

let slideCpnt = [element1, element2, element3];
/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
  height: "400px",
  width: "600px",
  background: "transparent"
};

let itemsStyle = {
  // , margin: "0px 0px", padding: "0px"
};

let buttonSetting = {
  placeOn: "bottom-beneath"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  autoSliding: { interval: "2s" }
  //, duration: "0.3s"
};

const Carousel = () => (
  <CarouselSlider
    slideCpnts={slideCpnt}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
  />
);

export default Carousel;
