import React from "react";

export default class Icon extends React.Component {
    render () {
    return (
            <a href = "/#">
             <img src = "shield.png" alt = "example" style = {{width: "40px", alignContent: "center", marginRight: this.props.className === "navBarStyle" ? "25px":"0px"}}/>
            </a>
        )
    }
}