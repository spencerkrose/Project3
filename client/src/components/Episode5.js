import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';
import Disqus from 'disqus-react';
const disqusShortname = 'deathatabakesale';
const disqusConfig = {
}

function Episode5() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast responsive-img" src="https://i.imgur.com/fIKvPAG.png"></img>
      <br></br>
      <div className="podcastPlayer">
      <ReactAudioPlayer
    src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Death+at+a+Bake+Sale+-+Erin+and+Sean.mp3"
    controls/>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/BEPbI4F.jpg"></img>
      </div>
     


      <div className="container">
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
      <Footer />
    </div>

  );
}

export default Episode5;