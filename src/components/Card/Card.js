import React from "react";
import "./Card.css";

const Card = props => (
    <div className={`img-container ${props.shaken ? "shaken" : ""}`}>
        <img alt={props.name} src={props.image} onClick={props.onclick}/>
    </div>
);

export default Card;