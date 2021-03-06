import React from "react";
import "../style.css"
import Footer from "./Footer"
import PostIt from "./PostIt"

function seasonOne() {
    return (
        <div>
        <div>
        <img id="corkBoard" className="center-align container" src="https://i.imgur.com/5lKnFzV.jpg"></img>
        </div>
        <br></br>
        <div id="paperBit" className="center-align container row">
        <img className="responsive-img" src="https://i.imgur.com/EqtMCsQ.png"></img>
        </div>
        <div className="center-align container row">
         <div className="col s4">
         <PostIt image="https://i.imgur.com/I1APKzy.png" episode ="/Episodes/1"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/mKFTxZu.png" episode ="/Episodes/2"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/GtgRMTR.png" episode ="/Episodes"/>         
         </div>
         </div>
         <div className="center-align container row">
         <div className="col s4">
         <PostIt image="https://i.imgur.com/GtgRMTR.png" episode ="/Episodes"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/GtgRMTR.png" episode ="/Episodes"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/GtgRMTR.png" episode ="/Episodes"/>         
         </div>
        <div className="center-align container row">
         <div className="col s12">
             <PostIt image="https://i.imgur.com/GtgRMTR.png" episode ="/Episodes"/>
        </div>
        </div>
        </div>
<br>
</br>
<br>
</br>
            <Footer/>
        </div>
        
    )}

export default seasonOne;