import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';
import Disqus from 'disqus-react';
const disqusShortname = 'deathatabakesale';
const disqusConfig = {
}

function Episode7() {
  return (
    <div>
      <div className="center-align">
      <ReactAudioPlayer
    src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Death+at+a+Bake+Sale+-+The+Finale.mp3"
    controls/>
    </div>
    <div className="container">
      <img className="podcastPlayer2" src="https://i.imgur.com/ybAj3wb.png"></img>
      </div>
      <div className="container">
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
      <Footer />
    </div>

  );
}

export default Episode7;