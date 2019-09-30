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
      {/* <div className="responsive">
      <iframe title="Episode 1 - Lemon Bars (with Andrew Lemna and Alex Prichodko)" src="https://www.podbean.com/media/player/s88t4-c18b61?from=usersite&skin=1&share=1&fonts=Helvetica&auto=0&download=1&version=1" height="122" width="100%" style="border: none;" scrolling="no" data-name="pb-iframe-player"></iframe>
        </div> */}
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