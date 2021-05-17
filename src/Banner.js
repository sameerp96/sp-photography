import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";


function Banner() {
  const history = useHistory();

  return (
    <div className="banner">
      
      <div className="banner__info">
        <h1>Get out and streach your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>

        <Button onClick={() => history.push("/portfolio")} variant="outlined">
          View Portfolio
        </Button>
      </div>

    </div>
  );
}

export default Banner;
