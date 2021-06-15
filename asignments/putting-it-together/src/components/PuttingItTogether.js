import React, { Component } from 'react'

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
}
