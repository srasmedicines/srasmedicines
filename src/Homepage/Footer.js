import React, { Component } from "react";
import { Link } from "@reach/router";
import Logo from "../assets/images/logo_dark.svg";
import MailIcon from "../assets/images/mail.png";
import OfficeIcon from "../assets/images/office.png";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import youtubeIcon from "../assets/images/youtube.png";
import CallIcon from "../assets/images/call-icon.png";
import India_Flag from "../assets/images/india_flag.png";
import "./footerS.css";
export default class Index extends Component {
  state = {};

  render() {
    return (
      <div className="footer">
        {/* <div className="footer-a" /> */}
        <div className="footer-b">
          <div className="f-navigation">
            <div>
              <h2>Quick Links</h2>
              <Link to="/">Homepage</Link>
              <Link to="/products">Our Products</Link>
              <Link to="/about_us">About Us</Link>
              <Link to="/contact_us">Contact Us</Link>
            </div>
            <div>
              <h2>Contact Us</h2>
              <div className="footer-details">
                <img src={MailIcon} alt="Mail" />
                <a href="mailto:srasneeru@gmail.com">srasneeru@gmail.com</a>
              </div>
              <div className="footer-details">
                <img src={CallIcon} alt="Mobile" />
                <a href="tel:+919255427922">+91 92554 27922</a>
                <a href="tel:+918295027922">+91 82950 27922</a>
              </div>
              <div className="footer-details">
                <img src={OfficeIcon} alt="Address" />
                <a href="https://maps.app.goo.gl/cczvJFESkefLbGqe6?g_st=ic">Panipat, Haryana, 132103, India</a>
              </div>
              <div className="social-media">
                  <p>Follow us on Social media</p>
                  <div>
                    <a href="https://www.facebook.com/profile.php?id=100084505491455" target="_blank"><img src={facebookIcon} alt="facebook" /></a>
                    <a href="https://www.instagram.com/srasmedicine01/" target="_blank"><img src={instagramIcon} alt="instagram" /></a>
                    <a href="https://www.youtube.com/channel/UCLMC2jceh_Dq2mfF3AN02Ag/featured" target="_blank"><img src={youtubeIcon} alt="youtube" /></a>
                  </div>
              </div>
            </div>
          </div>
          <div className="footer-b-logo">
            <img src={Logo} alt="SRAS Medicines" />
            <h1>SRAS Medicines</h1>
          </div>
        </div>
        <div className="footer-c">
          <p className="parent-company">
            © 2021 SRAS Medicines. All Rights reserved. Designed with Care and
            Love
          </p>
          <div className="footer-copyright">
            <Link to="/privacy_statement">Privacy Statement</Link>|
            <Link to="/terms_of_use">Terms of Use</Link>
          </div>
        </div>
      </div>
    );
  }
}
