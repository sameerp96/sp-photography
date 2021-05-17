import React from 'react'
import "./Footer.css";
import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


function Footer() {

    const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


    return (
        <div className="footer">
            <div className="footer__line__div">
            <Button className="footer__line2" onClick={scrollToTop}>Move to top <ExpandLessIcon/></Button> 
            
            {/* <ExpandLessIcon onClick={scrollToTop} className="scroll__icon"></ExpandLessIcon>  */}
            
            <p className="footer__line1">© Copyright 2021 SP Photography</p> 
            </div>
            <br></br>
            <p className="footer__line3">Weddings   &nbsp;   Pre-Weddings   &nbsp;   Product   &nbsp;   Event   &nbsp;   Aerial   &nbsp;   Portrait   &nbsp;   Baby Shower   &nbsp;   Fashion   &nbsp;   Travel   &nbsp;   Advertising    </p>
        </div>
    )
}

export default Footer
