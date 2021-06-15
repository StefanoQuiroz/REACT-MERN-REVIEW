/* import React, { useState } from 'react';

const LightSwitch = () => {
    const [state, setState] = useState({
        position: "On"
    })

    const flipSwitch = () => {
        (state.position==="On") ? setState({position:"Off"}) : setState({position:"On"});
    }

    return(
        <div>
            <p>The light is currently {state.position}</p>
            <button onClick={flipSwitch}>Flip Switch</button>          
        </div>
    );
}

export default LightSwitch; */

import React, { Component } from 'react'

export default class LightSwitch extends Component {
    constructor(props){
        super(props);
        this.state={
            position:"On"
        }
    }

    flipSwitch = () => {
        if(this.state.position === "On"){
            this.setState({position:"Off"})
        } else {
            this.setState({position:"On"})
        }
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button onClick={this.flipSwitch}>Flip Switch</button>      
            </fieldset>
        )
    }
}

