import React, { useState } from 'react';

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

export default LightSwitch;
