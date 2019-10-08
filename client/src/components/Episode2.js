import React from "react";
import "../style.css"
import Footer from "./Footer"
import ReactAudioPlayer from 'react-audio-player';
import Disqus from 'disqus-react';
const disqusShortname = 'deathatabakesale';
const disqusConfig = {
}


function Episode2() {
  return (
    <div>
      <div className="center-align">
      <img className="podcast responsive-img" src="https://i.imgur.com/c5WjIAT.png"></img>
      <div className="podcastPlayer">
      <iframe title="Episode 2 - Snickerdoodles (with Katie Heath and Kyle Uhelski)" src="https://www.podbean.com/media/player/mudwy-c278d4&?from=usersite&skin=1&fonts=Helvetica&auto=0&download=1&share=1&version=1&btn-skin=113" height="122" width="100%" scrolling="no" data-name="pb-iframe-player"></iframe>
        </div>
        <img className="clueBoard center-align container" src="https://i.imgur.com/UgSBXH0.jpg"></img>
      </div>
     


      <div className="container">
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
      <Footer />
    </div>

  );
}

export default Episode2;