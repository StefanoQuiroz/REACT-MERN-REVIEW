//import React, { useState } from 'react';
import React, { useReducer } from 'react';

const initialState = {
    firstName: "",
    lastname: "",
    email: "",
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type] : action.payload
    }
}

const MessageForm = ({funcion}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (event) => {
        const {name, value} = event.target;
        dispatch({
            type: name,
            payload: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        funcion(state);
        console.log({1: state})//console.log optional
    }
    /* const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name] : value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({1: state});
        funcion(state);
        console.log({2: state});
    } */

    return (
        <form onSubmit={onSubmit}>
            <h2>Form  with props function</h2>
            <div className="row">
                <label htmlFor="FirstName">First Name: </label>
                <input type="text" id="FirstName" name="firstName" value={state.firstName} onChange={onChange}/>
            </div>
            <div className="row">
                <label htmlFor="LastName">Last Name: </label>
                <input type="text" id="LastName" name="lastName" value={state.lastName} onChange={onChange}/>
            </div>
            <div className="row">
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="email" value={state.email} onChange={onChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MessageForm;
