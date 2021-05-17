import React, { useState } from "react";
import "./Mobilemenu.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mobilemenu() {

  const history = useHistory();

  const clickfunction = () => {

    document.getElementById("mobile__menu").style.display = "none";
    let path = "./";
    history.push(path);
    
  };

  const clickfunction1 = () => {

    document.getElementById("mobile__menu").style.display = "none";
    let path = "./portfolio";
    history.push(path);
    
  };

  const clickfunction2 = () => {

    document.getElementById("mobile__menu").style.display = "none";
    let path = "./about";
    history.push(path);
    
  };

  const clickfunction3 = () => {

    document.getElementById("mobile__menu").style.display = "none";
    let path = "./contact";
    history.push(path);
    
  };

  return (
    <div id="mobile__menu" className="mobile__menu">
      <Button onClick={clickfunction} style={{ fontSize: "20px" }}>HOME</Button>
      <Button onClick={clickfunction1} style={{ fontSize: "20px" }}>PORTFOLIO </Button>
      <Button onClick={clickfunction2} style={{ fontSize: "20px" }}>ABOUT </Button>
      <Button onClick={clickfunction3} style={{ fontSize: "20px" }}>CONTACT </Button>
    </div>
  );
}

export default Mobilemenu;
