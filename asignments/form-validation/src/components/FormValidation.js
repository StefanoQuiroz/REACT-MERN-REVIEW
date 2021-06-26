import React, { useReducer } from 'react';

const initialState = {
    firstName:{
        value:''
        //error: null
    },
    lastName : {
        value:''
        //error: null
    },
    email: {
        value:''
        //error: null
    }
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type] : action.payload
    }
}

const FormValidation = () => {

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
        console.log(state);
    }

    /* const firstNameFunc = () => {
        if(state.firstName.value > 0 &&  )
    } */

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={state.firstName.value} onChange={onChange}/>
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={state.lastName.value} onChange={onChange}/>
            </div>
            <div className="row">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={state.email.value} onChange={onChange}/>
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default FormValidation;
