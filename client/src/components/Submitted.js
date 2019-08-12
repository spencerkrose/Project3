import React from "react";
import "../style.css"
import Footer from "./Footer"

function Submitted() {
    return (
        <div>
         <h1 className=" newspaper center-align">
             Clue Submitted!</h1>
        <h4 className= "newspaper center-align"> Thank you for emailing us. We promise to investigate all clues and leave no stone unturned!</h4>
        <h4 className= "newspaper center-align"> Be sure to subscribe to stay up to date!</h4>
         <Footer/>
         </div>
         
      
      
    );
  }
  
  export default Submitted;