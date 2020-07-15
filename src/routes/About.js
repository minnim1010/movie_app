/** @format */

import React from "react";
import "../css/About.css";

function About(props) {
  return (
    <div className='about__container'>
      <img
        src='https://cdn.pixabay.com/photo/2016/11/23/14/57/adorable-1853372_1280.jpg'
        alt='cat'
      ></img>
      <div className='container__text'>Cat is cute.</div>
    </div>
  );
}

About.propTypes = {};

export default About;
