/* import React, { Component } from 'react'

export default class PuttingItTogether extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    incrementAge = () => {
        this.setState({age: this.state.age + 1});
    }

    
    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.incrementAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
} */


import React, { useState } from 'react';

const PuttingItTogether = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [ages, setAges] = useState(age);

    const incrementAge = () => {
        setAges(ages+1);
    }

    const decrementAge = () => {
        setAges(ages-1 );
    }
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {ages}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={incrementAge}>Increase Birthday Button for {firstName} {lastName}</button>
            <br/>
            <button onClick={decrementAge}>Decrease Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PuttingItTogether;
