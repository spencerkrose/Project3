import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';



function Episode2() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast responsive-img" src="https://i.imgur.com/c5WjIAT.png"></img>
      <div className="podcastPlayer">
      <ReactAudioPlayer
    src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Episode+2-+Snickerdoodles+with+Katie+and+Kyle.mp3"
    controls/>
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