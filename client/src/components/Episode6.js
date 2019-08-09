import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';

function Episode6() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast responsive-img" src="https://i.imgur.com/kODxOnr.png"></img>
      <br></br>
      <div className="podcastPlayer">
      <ReactAudioPlayer
    src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Death+at+a+Bake+Sale+-+Rachel+and+Garrett.mp3"
    controls/>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/vjw5RQ8.jpg"></img>
      </div>
     
      <Footer />
    </div>

  );
}

export default Episode6;