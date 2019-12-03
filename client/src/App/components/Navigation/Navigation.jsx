import React from "react";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <ul className = "nav nav-tabs justify-content-center" style = {{width: "100%", textAlign: "center", backgroundColor: "#5AC0FD"}}>
            <li className = "nav-item">
                <Link to="/summary"><h4 className="nav-link" style={{ color: "black", fontFamily: "Source Sans Pro, sans-serif"}}>Summary</h4></Link>
                {/* <a className = "nav-link" href = "/summary" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Summary</h4>
                </a> */}
            </li>
            <li className = "nav-item">
                <Link to="/glucose"><h4 className="nav-link" style={{ color: "black", fontFamily: "Source Sans Pro, sans-serif"}}>Glucose</h4></Link>
                {/* <a className = "nav-link" href = "/glucose" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Glucose</h4>
                </a> */}
            </li>
            <li className = "nav-item">
                <Link to="/food"><h4 className="nav-link" style={{ color: "black", fontFamily: "Source Sans Pro, sans-serif"}}>Food</h4></Link>
                {/* <a className = "nav-link" href = "/food" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Food</h4>
                </a> */}
            </li>
            <li className = "nav-item">
                <Link to="/calendar"><h4 className="nav-link" style={{ color: "black", fontFamily: "Source Sans Pro, sans-serif"}}>Calendar</h4></Link>
                {/* <a className = "nav-link" href = "/calendar" style = {{fontFamily: "Source Sans Pro, sans-serif"}}>
                    <h4 style = {{color:"black"}}>Calendar</h4>
                </a> */}
            </li>
        </ul>
    )

}

export default Navigation;