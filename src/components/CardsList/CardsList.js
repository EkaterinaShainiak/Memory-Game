import React from 'react';
import Card from '../Card';
import "./CardsList.css";

const CardsList = props => (
    <div className="cardsList">
        {props.cards.map(item => (
            <Card name={item.name} image={item.image} key={item.id}/>
        ))}
    </div>
)
export default CardsList;