import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
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
        /* if(state.firstName.length > 0 && state.firstName.length < 4){
            state.errors = "First-name must be at least 4 characters";
        } */
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={state.firstName.value} onChange={onChange}/>
                {
                    state.firstName.error !== null ? <p className="error">{state.firstName.error}</p> : ''
                }
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={state.lastName.value} onChange={onChange}/>
                {
                    state.lastName.error !== null ? <p className="error">{state.lastName.error}</p> : ''
                }
            </div>
            <div className="row">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={state.email.value} onChange={onChange}/>
                {
                    state.email.error !== null ? <p className="error">{state.firstName.error}</p> : ''
                }
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default FormValidation;
