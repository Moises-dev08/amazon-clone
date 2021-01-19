import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__top" onClick={scrollTop}>
        <p className="footer__topTitle"> Back to top</p>
      </div>
      <div className="footer__middle">
        <div className="footer__middleLeft">
          <h4>Get to Know Us</h4>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div className="footer__middleCenter">
          <h4>Amazon Payment Products</h4>
          <p>Amazon Payment Products</p>
          <p>Amazon Rewards Visa Signature Cards</p>
          <p>Amazon.com Store Card</p>
          <p>Amazon Business Card</p>
          <p>Amazon Business Line of Credit</p>
          <p>Shop with Points</p>
          <p>Credit Card Marketplace</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="footer__middleRight">
          <h4> Amazon and COVID-19</h4>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon Prime</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footer__bottom">
        <Link to="/">
          <img
            className="footer__bottomLogo"
            src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
            alt="#"></img>
        </Link>
      </div>
    </div>
  );
};

export default footer;
