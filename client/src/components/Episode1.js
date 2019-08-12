import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';
import Disqus from 'disqus-react';

const disqusShortname = 'deathatabakesale';
const disqusConfig = {
}
function Episode1() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast responsive-img" src="https://i.imgur.com/jqitUs2.png"></img>
      <div className="podcastPlayer responsive">
      <ReactAudioPlayer
    src="https://deathatabakesale.s3.ca-central-1.amazonaws.com/Episode+1-+Lemon+Bars+with+Alex+and+Andrew+.mp3"
    controls/>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/9WTxlV6.jpg"></img>
      </div>

      <div className="container">
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
      <Footer />
    </div>

  );
}

export default Episode1;