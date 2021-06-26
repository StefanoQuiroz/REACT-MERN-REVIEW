import React, { useReducer } from 'react';


const initialState = {
    count:0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment' : return {count: state.count + 1 };
        case 'decrement' : return {count: state.count - 1 };
        default: return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {
        dispatch({type: 'increment'});
    }
    const decrement = () => {
        dispatch({type: 'decrement'});
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            {state.count}
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default UseReducer;
