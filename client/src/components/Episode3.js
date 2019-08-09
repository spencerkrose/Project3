import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';


function Episode3() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast responsive-img" src="https://i.imgur.com/NM7KM3h.png"></img>
      <br></br>
      <div className="podcastPlayer">
      <ReactAudioPlayer
    src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Death+at+a+Bake+Sale+Episode+3.mp3"
    controls/>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/rq7UPO2.jpg"></img>
      </div>
     


      <div>
       
      </div>
      <Footer />
    </div>

  );
}

export default Episode3;