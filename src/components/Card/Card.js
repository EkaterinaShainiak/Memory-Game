import React from "react";
import "./Card.css";

const Card = props => (
    <div className="img-container">
        <div alt={props.name} style={{backgroundImage: `url(${props.image})`}} />
    </div>
);

export default Card;