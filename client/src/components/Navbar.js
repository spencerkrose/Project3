import React from "react";
import "../style.css"
import {Dropdown, Button} from 'react-materialize';
import M from "materialize-css"



function Navbar() {
  return (
    <div>
      <nav>
        <div class="newspaper black nav-wrapper">
          <a href="/" class="responsive-img brand-logo center"><img src="https://i.imgur.com/0c2kMCU.png"></img></a>
          <ul class="left hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Episodes">Episodes</a></li>
          </ul>
          <ul class="newspaper right hide-on-med-and-down">
            <li><Dropdown id="dropdownItems" trigger={<a>Subscribe</a>}>
              <a id="dropdownItems" href="https://www.apple.com/itunes/podcasts/" target="_blank">
                iTunes
                </a>
              <a id="dropdownItems" href="https://open.spotify.com/genre/podcasts-page" target="_blank">
                Spotify
                </a>
              <a id="dropdownItems" href="https://www.stitcher.com/" target="_blank">
                Stitcher
              </a>
              <a id="dropdownItems" href="https://luminarypodcasts.com/" target="_blank">
                Luminary
                </a>
            </Dropdown></li>
            <li><a href="http://instagram.com/deathatabakesale" target="_blank">Follow</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
      </nav>

    </div>

  );
}

export default Navbar;

