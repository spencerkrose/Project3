import React from "react";
import "../style.css"

function Character(props) {
    return (
<div className="card center-align">
<div className="card-image waves-effect waves-block waves-light">
  <img className="center-align activator responsive-img" src={props.image}/>
</div>
<div className="card-content">
  
</div>
<div className="card-reveal">
  <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
  <p>{props.bio} Played by {props.actor}.</p>
</div>
</div>
    )
}
export default Character;