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
         <PostIt image="https://i.imgur.com/Sy3NjSQ.png" episode ="/Episodes/1"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/eASOJCZ.png" episode ="/"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/ZcYO1D9.png" episode ="/"/>         
         </div>
         </div>
         <div className="center-align container row">
         <div className="col s4">
         <PostIt image="https://i.imgur.com/ah7thTw.png" episode ="/"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/LW2PWcW.png" episode ="/"/>
         </div>
         <div className="col s4">
         <PostIt image="https://i.imgur.com/Ilyk3ck.png" episode ="/"/>         
         </div>
        <div className="center-align container row">
         <div className="col s12">
             <PostIt image="https://i.imgur.com/VarVW3f.png" episode ="/"/>
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