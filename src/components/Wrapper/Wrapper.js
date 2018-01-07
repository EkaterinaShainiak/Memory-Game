import React, { Component } from "react";
import Title from "../Title";
import CardsList from "../CardsList";
import cards from "../../cards"
import "./Wrapper.css";

export default class Wrapper extends Component {
    constructor() {
        super();
        this.state = {
            selected: [],
            shaken: false,
        };
        this.cards = cards
        this.maxScore = 0
      }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    handleClick = (idx) => {
        // We always use the setState method to update a component's state
        const selected = this.state.selected
        if (selected.includes(idx)) {
            this.setState({ selected: [], shaken: true })
            setTimeout(() => this.setState({ shaken: false }), 1000)
        } else {
            this.shuffleArray(this.cards)
            this.setState({ selected: [...selected, idx] });
            this.maxScore = Math.max(this.maxScore, selected.length + 1)
        }
    };
    
    render() {
        const cards = this.cards
        const score = this.state.selected.length
        const maxScore = this.maxScore
        return <div className="wrapper">
            <Title score={score} maxScore={maxScore}>
                Click on an image to earn points, but don't click on any more than once!
            </Title>
            <CardsList cards={cards} onclick={this.handleClick} shaken={this.state.shaken}/>
        </div>;
    }
}

