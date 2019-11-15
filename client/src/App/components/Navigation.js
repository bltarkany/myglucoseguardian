import React from "react";

const navigation = () => {
    return (
        <ul className = "nav nav-tabs justify-content-center bg-light border" style = {{width: "100%", textAlign: "center"}}>
            <li className = "nav-item">
                <a className = "nav-link" href = "/n" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Summary</h4>
                </a>
            </li>
            <li className = "nav-item">
                <a className = "nav-link" href = "/n" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Glucose</h4>
                </a>
            </li>
            <li className = "nav-item">
                <a className = "nav-link" href = "/n" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Food</h4>
                </a>
            </li>
            <li className = "nav-item">
                <a className = "nav-link" href = "/n" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Calendar</h4>
                </a>
            </li>
        </ul>
    )

}

export default navigation;