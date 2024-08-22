import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>A React JS project on Food Order App </p>
          <div className="footer-social-icons">
            {/* <img src={assets.facebook_icon} alt="" /> */}
            {/* <img src={assets.twitter_icon} alt="" /> */}
            {/* <img src={assets.linkedin_icon} alt="" /> */}
          </div>
        </div>
        <div className="footer-content-center">
          <h2> Website </h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            <li>Download the app</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact</h2>
          <ul>
            <li>Ashish Sahoo</li>
            <li>ashishsahoo0013@gmail.com</li>
            <li>
              <a href="https://github.com/AashishSahoo">Github</a>{" "}
            </li>
            <li>
              <a href="www.linkedin.com/in/ashishsahoo899">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Fusion.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
