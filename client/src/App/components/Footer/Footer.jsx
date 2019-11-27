import React from "react";
import Icon from "../Icon/Icon"
import "./Footer.css"
 
const Footer = () => (
  <footer className="p-3 text-center foot">
    <Icon/>
    <p>
      Glucose Guardian<a href="https://github.com/bltarkany/myglucoseguardian/tree/master/client/src/App"> GitHub</a>
    </p>
  </footer>
);

export default Footer;
