import React from "react";
import "./Title.css";

const Title = props => (
    <div>
        <h1 className="title">{props.children}</h1>
        <div className="score">
            <span id="currentScore">Score: {props.score}</span>
            <span id="maxScore">Max Score: {props.maxScore}</span>
        </div>
    </div>
);

export default Title;
