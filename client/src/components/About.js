import React from "react";
import "../style.css"
import Character from "./Character"
import Footer from "./Footer"

function About() {
    return (
        <div>
         <h1 className=" newspaper center-align">
             The Suspects
         </h1>
         <p className="newspaper center-align">Click a photo to learn more...</p>
         <div className="container  mflex-container">
         {/* <div className="center-align container row"> */}
         {/* <div className="center-align characterBox col s4"> */}
         <Character className="center-align" name="Aaron Fields" image="https://i.imgur.com/AsFmv5p.png/" bio="Aaron Fields is a first time podcaster and proud-ish parent of Michael Fields." actor="Colin Rourke"/>
         {/* </div> */}
         {/* <div className="center-align characterBox col s4"> */}
         <Character className="center-align"  name="Betty Cooker" image="https://i.imgur.com/VMVtMvH.png" bio="Betty Cooker loves this newfangled podcast, but loves her daughter April more." actor="Kennedy Baldwin"/>
         {/* </div> */}
         {/* <div className="center-align characterBox col s4"> */}
         <Character className="center-align"  name="Michael Fields" image="https://i.imgur.com/brjM0an.png" bio="Michael Fields is bad at talking and especially bad at talking about himself." actor="Spencer Rose"/>
         </div>
         <Footer/>
         </div>
         
      
      
    );
  }
  
  export default About;