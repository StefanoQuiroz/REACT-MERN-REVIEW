/* import React, { Component } from 'react'

export default class ClassComponents extends Component {
    render() {
        return (
            <div>This is our first component.</div>
        )
    }
} */

import React, { Component } from 'react'

export default class ClassComponents extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return (
            <div>
                <h3>My name is {firstName} {lastName}</h3>
            </div>
        )
    }
}
