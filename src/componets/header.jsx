import React, { useEffect, useState } from "react";
import HeaderResponsive from "../componets/headerResponsive";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { auth } from "../firebase";
import "../styles/header.css";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="headerWrap">
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
            alt="#"></img>
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link className="header__navLink" to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                <p>Hello {!user ? "Guest" : user.email}</p>
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          {(user?.uid == "tHtb9dtVi6MW9GuJghDRjrHK3Mv1" ||
            user?.uid == "8NosyHSCTbYab6ZtPmtjJ9aaJTx1" ||
            user?.uid == "tHtb9dtVi6MW9GuJghDRjrHK3Mv1") && (
            <Link className="header__navLink" to="/productsForm">
              <div className="header__option">
                <span className="header__optionLineOne">Admin</span>
                <span className="header__optionLineTwo">Options</span>
              </div>
            </Link>
          )}

          <Link className="header__navLink" to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link className="header__navLink" to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <HeaderResponsive className="headerResponsive" />
    </div>
  );
};

export default Header;
