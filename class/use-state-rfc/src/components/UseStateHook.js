/* import React, { useState } from 'react';

const UseStateHook = () => {
    const [state, setState] = useState({
        clickCount: 0
    })

    const clickHandler = () => {
        console.log(state);
        setState({
            clickCount: state.clickCount + 1
        })
    }
    return (
        <div>
            <button onClick={clickHandler}>Click me number: {state.clickCount} </button>
        </div>
    );
}

export default UseStateHook; */

import React, { useState } from 'react';

const UseStateHook = () => {
    const [state,setState] = useState(0);

    const clickHandler = () => {
        console.log(state);
        setState(state+1);
    }
    return (
        <div>
            <button onClick={clickHandler}>You click me number of times: {state}</button>            
        </div>
    );
}

export default UseStateHook;

