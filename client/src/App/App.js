import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loading from "./components/Loading/Loading";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

import './App.css';
// react logo
// import logo from './logo.svg';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import Education from "./public/Education";
import Food from "./pages/Food";
// import Glucose from "./public/Glucose";
// import Profile2 from "./public/Profile";
// testing paths for initial setup
import Home2 from './pages/Home2';
import List from './pages/List';

import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute exact path='/Home2' component={Home2}/>
            <PrivateRoute path='/list' component={List}/>

            {/* Use /test to view your experimental components. Just swap out "Header" for whatever component you're building"*/}
            <PrivateRoute path='/test' component={Header}/>
            <PrivateRoute path="/food" component={Food} />

            
            {/* <PrivateRoute path="/education" component={Education} />
            <PrivateRoute path="/food" component={Food} />
            <PrivateRoute path="/glucose" component={Glucose} /> */}
            {/* <PrivateRoute path="/profile2" component={Profile2} /> */}
            {/* <Route path="/NoMatch" component={NoMatch} /> */}
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
