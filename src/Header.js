import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import whatsapp from "./whatsapp.png";
import Mobilemenu from "./Mobilemenu";


function Header() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="header">

      <div className="header__logo">

        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="banner__search">
        {showSearch && <Mobilemenu />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "X" : "Menu"}
        </Button>
      </div>
      </div>

      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button style={{ fontSize: "23px" }}>HOME</Button>
        </Link>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <Button style={{ fontSize: "23px" }}>Portfolio</Button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button style={{ fontSize: "23px" }}>ABOUT</Button>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button style={{ fontSize: "23px" }}>CONTACT</Button>
        </Link>
      </div>

      <div className="navbar__mediaIcons">
        <div className="social__icons__div1">
        <Link to={{ pathname: "https://www.instagram.com/sagar_purohit808/" }} target="_blank">
          <img className="social__icons" src={instagram} alt="logo" />
        </Link>
        </div>
        <div className="social__icons__div2">
        <Link to={{ pathname: "https://wa.link/9j6m66" }} target="_blank">
          <img className="social__icons" src={whatsapp} alt="logo" />
        </Link>
        </div>
      </div>

      {/* <div className='banner__search'>
                {showSearch && <Search/>}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>  */}

    </div>
  );
}

export default Header;
