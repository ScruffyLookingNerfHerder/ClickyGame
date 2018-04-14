import React from "react";
import "./Charactercard.css";

const Charactercard = props => (

    <div className = "parent"
      onClick={() => props.handleClick(props.id)}
      >
    <img
      className = "images"
      src = {props.image}
      alt = {props.name}

      />
      
    </div>

);

export default Charactercard;
