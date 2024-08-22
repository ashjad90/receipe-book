import React, { useContext, useRef } from "react";
import "../../styles/layout/navbar.scss";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
    <>
      <div className="navbar">
        <div className="logo">Rasoibook</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link to="/receipe-list">Receipes</Link>
              </li>
            ) : null}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <i
          onClick={() => document.body.classList.toggle("dark")}
          title="Toggle Light/Dark Mode"
          className="fa-solid fa-circle-half-stroke"
        ></i>
        <Link to="/login" onClick={isLoggedIn?logoutHandler:null}>
            <i title={isLoggedIn?"Logout":"Login"} className="fa-solid fa-user"></i>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
