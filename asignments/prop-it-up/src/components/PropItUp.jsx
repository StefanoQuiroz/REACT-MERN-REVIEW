/* import React, { Component } from 'react'

export default class PropItUp extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
} */

import React from 'react';

const PropItUp = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>HairColor: {hairColor}</p>
        </div>
    );
}

export default PropItUp;

