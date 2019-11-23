import React, { Fragment } from "react";

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";

const Home = () => (
  <Fragment>  
    <NavBar/>
    <Hero />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
