import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { auth } from "../firebase";
import "../styles/headerResponsive.css";

const HeaderResponsive = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="headerResponsive">
      <Link to="/">
        <img
          className="headerResponsive__logo"
          src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
          alt="#"
        />
      </Link>

      <div className="headerResponsive__rightNav">
        <Link className="headerResponsive__link" to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="headerResponsive__optionUser">
            <span className="headerResponsive__optionLineOne">
              <p>Hello {!user ? "Guest" : user.email}</p>
            </span>
            <span className="headerResponsive__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link className="headerResponsive__link" to="/checkout">
          <div className="headerResponsive__optionBasket">
            <ShoppingCartIcon />
            <span className="headerResponsive__optionLineTwo headerResponsive__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      <div className="headerResponsive__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <nav role="headerResponsive__nav">
        <div className="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="menu">
            <p className="headerResponsive__menuUser">
              {" "}
              Hello {!user ? "Guest" : user.email}
            </p>

            <Link to="/">
              <a href="#">
                <li>Home </li>
              </a>
            </Link>
            {user?.uid == "tHtb9dtVi6MW9GuJghDRjrHK3Mv1" && (
              <Link to="/productsForm">
                <a href="#">
                  <li>Admin Options </li>
                </a>
              </Link>
            )}

            <a href="#">
              <li> Your Prime</li>
            </a>

            <Link to="/orders">
              <a href="#">
                <li>Returns Orders</li>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderResponsive;
