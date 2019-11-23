import React from "react";

import { useAuth0 } from "../../react-auth0-spa";


const Header = () => {

    const { user} = useAuth0();

    return (
        <nav className = "navbar nav-bar bg-light border">
            <div className = "container" style = {{width: "100%"}}>
                <div className = "row" style = {{width: "100%"}}>
                    <div className = "col-md-2" style = {{textAlign: "center"}}>
                        <a href = "/#">
                            <img src = "example.jpg" alt = "example" style = {{width:"40px", display: "block", margin: "0px auto"}}/>
                        </a>
                    </div>
                    <div className = "col-md-2 spacer"></div>
                    <div className = "col-md-4" style = {{textAlign: "center", justifyContent: "center", display: "flex", alignItems: "center"}}>
                        <h1 className = "align-middle">Glucose Guardian</h1>
                    </div>
                    <div className = "col-md-2 spacer"></div>
                    <div className = "col-md-2" style = {{textAlign : "center"}}>
                        <a href = "/#">
                            <img src= {user.picture} alt = "Profile"  className="nav-user-profile rounded-circle" style = {{width:"40px", display: "block", margin: "0px auto"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;