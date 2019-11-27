import React, { Fragment } from "react";

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";
import "./style.css"

const Home = () => (
  <Fragment>  
    <NavBar/>
    <Hero />
    <hr className="break"/>
    <Content />
  </Fragment>
);

export default Home;
