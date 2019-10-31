import React, { Component } from 'react';

import Difficulty from './Difficulty/Difficulty';
import Input from './Input/Input';
import Guess from './Guess/Guess';
import Display from './Display/Display';
import GuessNumber from './GuessNumber/GuessNumber';

class Game extends Component {
    state = {
        difficulty: '',
        generatedAnswer: '',
        value: '',
        numberOfGuesses: 0,
        display: {
            temperature: '',
            warning: ''
        },
        isDisplayHelpAvailable: false
    }

    componentDidMount = () => {
        this.setState({
            generatedAnswer: Math.floor(Math.random() * 10)
        });
    }

    changeDifficulty = (level) => {
        let possibleIntegerCount = 10;

        if (level === 'Easy') {
            possibleIntegerCount = 10;
        } else if (level === 'Medium') {
            possibleIntegerCount = 50;
        } else {
            possibleIntegerCount = 100;
        }

        const generated = Math.floor(Math.random() * possibleIntegerCount);

        this.setState({
            difficulty: level,
            generatedAnswer: generated,
            value: '',
            display: {},
            numberOfGuesses: 0,
            isDisplayHelpAvailable: false
        });
    }

    handleChange = (e) => {
        this.setState({
            value: parseInt(e.target.value)
        });
    }

    checkAnswer = () => {
        const guesses = this.state.numberOfGuesses;
        const value = this.state.value;
        const answer = this.state.generatedAnswer;
        const difference = (value - answer);
        const percentage = Math.floor(difference / answer * 100);

        let warning = '';
        let temperature = '';

        if (percentage < 0) {
            warning = 'Higher';
        } else {
            warning = 'Lower';
        }

        const absolutePercentage = Math.abs(percentage);

        if (absolutePercentage > 75) {
            temperature = 'Very Cold'
        } else if (absolutePercentage > 50) {
            temperature = 'Cold'
        } else if (absolutePercentage > 20) {
            temperature = 'Warm'
        } else if (absolutePercentage > 5) {
            temperature = 'Hot'
        } else if (absolutePercentage > 0) {
            temperature = 'Very Hot'
        } else {
            temperature = 'GOOD JOB';
            warning = '';
        }

        this.setState({
            isDisplayHelpAvailable: true,
            display: {
                temperature: temperature,
                warning: warning
            },
            numberOfGuesses: guesses + 1
        });
    }

    render() {
        return (
            <div>
                <Difficulty changeDifficulty={this.changeDifficulty} />
                <Input 
                    value={this.state.value} 
                    onChangeValue={this.handleChange} 
                />
                <Guess checkAnswer={this.checkAnswer} />
                <Display 
                    isDisplayHelpAvailable={this.state.isDisplayHelpAvailable}
                    display={this.state.display} 
                />
                <GuessNumber numberOfGuesses={this.state.numberOfGuesses} />
            </div>
        );
    }
}

export default Game;