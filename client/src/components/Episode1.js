import React from "react";
import "../style.css"
import Footer from "./Footer"
import Plyr from "plyr"
const player = new Plyr('#player');

function Episode1() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast" src="https://i.imgur.com/jqitUs2.png"></img>
      <div className="podcast">
      <audio className="podcast" id="player" controls>
          <source src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Episode+1-+Lemon+Bars+with+Alex+and+Andrew+.mp3" type="audio/mp3" />
          <source src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Episode+1-+Lemon+Bars+with+Alex+and+Andrew+.mp3" type="audio/ogg" />
        </audio>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/9WTxlV6.jpg"></img>
      </div>
     


      <div>
       
      </div>
      <Footer />
    </div>

  );
}

export default Episode1;