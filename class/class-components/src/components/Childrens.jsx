import React, { Component } from 'react'

export default class Childrens extends Component {
    render() {
        const {header, children} = this.props;
        return (
            <div>
                <h2>{header}</h2>
                {children}
                <button onClick={()=>alert("You Click me")}>Click Me</button>
            </div>
        )
    }
}
