import React from "react";
import "../style.css"
import Character from "./Character"
import Footer from "./Footer"

function About() {
    return (
        <div>
         <h1 class=" newspaper center-align">
             The Suspects
         </h1>
         <p class="newspaper center-align">Click a photo to learn more...</p>
         <div class="center-align container row">
         <div class="characterBox col s4">
         <Character name="Aaron Fields" image="https://i.imgur.com/AsFmv5p.png/" bio="Aaron Fields is a first time podcaster and proud-ish parent of Michael Fields." actor="Colin Rourke"/>
         </div>
         <div class="characterBox col s4">
         <Character name="Betty Cooker" image="https://i.imgur.com/VMVtMvH.png" bio="Betty Cooker loves this newfangled podcast, but loves her daughter April more." actor="Kennedy Baldwin"/>
         </div>
         <div class="characterBox col s4">
         <Character name="Michael Fields" image="https://i.imgur.com/brjM0an.png" bio="Michael Fields is bad at talking and especially bad at talking about himself." actor="Spencer Rose"/>
         </div>
         </div>
         <Footer/>
      </div>
      
    );
  }
  
  export default About;