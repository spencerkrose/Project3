import React from "react";
import "../style.css"
import PostIt from './PostIt'
import Footer from "./Footer"

function Episode1() {
    return (
      <div>
     <div className="center-align">
        <img className="center-align container" src="https://i.imgur.com/RciEJS6.jpg"></img>
        </div>
        <div>
          <PostIt id="postIt"/>
        </div>
         <Footer/>
      </div>
      
    );
  }
  
  export default Episode1;