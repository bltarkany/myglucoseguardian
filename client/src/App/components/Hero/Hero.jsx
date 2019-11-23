import React from "react";
import "./Hero.css";

// import logo from "../../assets/logo.svg";
// Comment
const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3" src="horse3.gif" alt="logo" width="480" />
    <h1 className="mb-4" style={{color: "#FF3849"}}>Glucose Guardian</h1>
 
    <p className="lead">
    Parents &amp; Children learn how to better manage your diabetes through Education and Games!
    {/* <a href="https://reactjs.org">React.js</a> */}
    </p>
  </div>
);

export default Hero;
