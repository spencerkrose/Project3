import React from "react";
import "../style.css"

function PostIt(props) {
    return (
<div>
  <a href={props.episode}><img id="postIt" class="activator responsive-img" src={props.image}/></a>
</div>
    )}
export default PostIt;