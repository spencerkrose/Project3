import React from "react";
import "../style.css"
import Footer from "./Footer"
import Plyr from "plyr"
const player = new Plyr('#player');

function Episode2() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast" src="https://i.imgur.com/c5WjIAT.png"></img>
      <div className="podcast">
      <audio className="podcast" id="player" controls>
          <source src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Episode+2-+Snickerdoodles+with+Katie+and+Kyle.mp3" type="audio/mp3" />
          <source src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Episode+2-+Snickerdoodles+with+Katie+and+Kyle.mp3" type="audio/ogg" />
        </audio>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/UgSBXH0.jpg"></img>
      </div>
     


      <div>
       
      </div>
      <Footer />
    </div>

  );
}

export default Episode2;