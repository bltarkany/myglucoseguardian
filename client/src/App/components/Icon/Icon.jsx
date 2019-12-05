import React from "react";
import shield from "./shield.png"

export default class Icon extends React.Component {
    render () {
    return (
            <a href = "/#">
             <img src = {shield} alt = "shield" style = {{width: "40px", alignContent: "center", marginRight: this.props.className === "navBarStyle" ? "25px":"0px"}}/>
            </a>
        )
    }
}