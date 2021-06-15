/* import React, { Component } from 'react'

export default class ClassComponents extends Component {
    render() {
        return (
            <div>This is our first component.</div>
        )
    }
} */

/* import React, { Component } from 'react'

export default class ClassComponents extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return (
            <div>
                <h3>My name is {firstName} {lastName}</h3>
            </div>
        )
    }
} */

import React from 'react';

const ClassComponents = (props) => {
    const {firstName, lastName} = props
    return (
        <div>
            <h2>My name is: {firstName} {lastName}</h2>
        </div>
    );
}

export default ClassComponents;

