import React from "react";
import "../style.css"

function Character(props) {
    return (
<div class="card center-align">
<div class="card-image waves-effect waves-block waves-light">
  <img class="center-align activator responsive-img" src={props.image}/>
</div>
<div class="card-content">
  
</div>
<div class="card-reveal">
  <span class="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
  <p>{props.bio} Played by {props.actor}.</p>
</div>
</div>
    )
}
export default Character;