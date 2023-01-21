import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <hr />
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="logoImage" />
          <span>amazon</span>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <LocationMarkerIcon className="icon" />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <LocationMarkerIcon className="icon" />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <LocationMarkerIcon className="icon" />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
          </div>
        </div>
        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <LocationMarkerIcon className="icon" />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <a href="mailto:s@gmail.com">a@.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
