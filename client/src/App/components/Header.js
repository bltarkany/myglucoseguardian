import React from "react";

//reactstrap imports here

const header = () => {
    return (
        <nav className = "navbar nav-bar bg-light border">
            <div className = "container" style = {{width: "100%"}}>
                <div className = "row" style = {{width: "100%"}}>
                    <div className = "col-md-2" style = {{textAlign: "center"}}>
                        <a href = "/#" className = "navbar-brand">
                            <img src = "example.jpg" alt = "example" style = {{width: "40px"}}/>
                        </a>
                    </div>
                    <div className = "col-md-2 spacer"></div>
                    <div className = "col-md-4" style = {{textAlign: "center", justifyContent: "center", display: "flex", alignItems: "center"}}>
                        <h1 className = "align-middle">Glucose Guardian</h1>
                    </div>
                    <div className = "col-md-2 spacer"></div>
                    <div className = "col-md-2" style = {{textAlign : "center"}}>
                        <a href = "/#" className = "navbar-brand">
                            <img src= "profile.png" alt = "" style = {{width:"40px"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default header;