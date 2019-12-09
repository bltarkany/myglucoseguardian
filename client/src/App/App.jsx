import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
//==========================Components============================//
import { Container } from "reactstrap";
import Loading from "./components/Loading/Loading";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Accordion from "./components/Accordion/Accordion"
//=============================Pages==============================//
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Food from "./pages/Food";
import MySummary from "./pages/MySummary";
import Glucose from "./pages/Glucose";
//=============================Auth0==============================//
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//=============================Util===============================//
// font awesome
import initFontAwesome from "./utils/initFontAwesome";
//=============================Util===============================//
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


initFontAwesome();

const App = () => {
    const { loading, user } = useAuth0();

    if (loading) {
        return <Loading />;
    }

    return (
        // Going to need to move <NavBar/> and <Footer/> component into each 'page' component if we're going to split <NavBar/> into <Header/> and <Navigation/>

        <Router history={history}>
            <NavBar/>
            <div
                id="app"
                // className="container-fluid"
                // style={{ height: "100%", backgroundColor: "#5AC0FD" }}
            >
                
                <Container >
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <PrivateRoute path="/profile" component={Profile} />
                        {/* Use /test to view your experimental components. Just swap out "Header" for whatever component you're building"*/}
                        <PrivateRoute path="/mySummary" render={()=>(<MySummary user={user.sub} />)} />
                        <PrivateRoute path="/food" render={()=>(<Food user={user.sub} />)} />
                        <PrivateRoute path="/glucose" render={()=>(<Glucose user={user.sub} />)} />
                        <PrivateRoute path="/test2/" component={Accordion} />

                        {/* <PrivateRoute path="/education" component={Education} />
                        <PrivateRoute path="/food" component={Food} />
                        <PrivateRoute path="/glucose" component={Glucose} /> */}
                        {/* <PrivateRoute path="/profile2" component={Profile2} /> */}
                        {/* <Route path="/NoMatch" component={NoMatch} /> */}
                    </Switch>
                </Container>
                
            </div>
            {/* <Footer /> */}
        </Router>
    );
};
export default App;