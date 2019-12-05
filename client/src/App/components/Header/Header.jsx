import React from "react";

import { useAuth0 } from "../../react-auth0-spa";
import shield from  "./shield.png"
import Icon from "../Icon/Icon"

import './Header.css'

const Header = () => {

    const { user} = useAuth0();

    return (
        <nav className = "nav-bar" style={{backgroundColor: "#6369D1"}}>
            <div className = "container" style = {{width: "100%"}}>
                <div className = "row" style = {{width: "100%"}}>
                    <div className = "col-md-2" style = {{textAlign: "center",  display: "flex", alignItems: "center"}}>
                            {/* <img src = {shield} alt = "shield" style = {{width:"40px", display: "block", margin: "0px auto" }}/> */}
                            <Icon/>
                    </div>
                    <div className = "col-md-2 spacer"></div>
                    <div className = "col-md-4" style = {{textAlign: "center", justifyContent: "center", display: "flex", alignItems: "center"}}>
                        <a href = "/#">
                            <h1 className = "align-middle">Glucose Guardian</h1>
                        </a>
                    </div>
                    <div className = "col-md-2 spacer"></div>
                    <div className = "col-md-2" style = {{display: "flex", alignItems: "center"}}>
                        <a href = "/#">
                            <img src= {user.picture} alt = "Profile"  className="nav-user-profile rounded-circle" style = {{width:"40px", display: "block", margin: "auto auto"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;