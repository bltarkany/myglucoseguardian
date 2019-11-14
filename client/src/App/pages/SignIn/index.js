import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInUser extends Component {
    state = {
        // userid,
        // might not even be needed. userID just used to pass redirect url an ID
        FirstName: '',
        LastName: ''
    }

    componentDidMount() {
        this.isLoggedIn();
      }

      //For use after next phase after MVP, Test to see if a user is logged in. If they rehit this page after successfully logging in, send user to their summary page. Not sure how to use Auth0 in order to test.
    isLoggedIn = () => {      
        return false;
    }

    //Calls Auth0
    LogIn = () => {
    }

    render() {
        return(
            <div></div>
        )
    }
}
export default SignInUser;