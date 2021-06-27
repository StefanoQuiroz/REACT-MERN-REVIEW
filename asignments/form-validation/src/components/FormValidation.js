import React, { useReducer } from 'react';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    error: {}
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type] : action.payload,
    }
}

const FormValidation = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const onChange = (event) => {
        const {name,value} = event.target;
        dispatch({
            type: name,
            payload: value
        })
        
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName, email} = state
        console.log({firstName, lastName, email});
    }
    
    const userValidation = () => {
        if(state.firstName.length > 0 && state.firstName.length < 3){
            state.error.firstName = "First Name must be at least 3 characters";
        } else if (state.lastName.length > 0 && state.lastName.length < 3){
            state.error.lastName = "Last Name must be at least 3 charcaters";
        } else if (state.email.length > 0 && state.email.length < 5){
            state.error.email = "Email must be at least 5 characters";
        } else{
            state.error.firstName = null;
            state.error.lastName = null;
            state.error.email = null;
        }
        
    }
    
    userValidation()
    
    return (
        <form onSubmit={onSubmit}>
            <h2>Form Validation useReducer</h2>
            <div className="row">
                <label htmlFor="FirstName">First Name: </label>
                <input type="text" id="FirstName" name="firstName" value={state.firstName} onChange={onChange}/>
                {
                    //operador logico &&
                    (state.error.firstName !== null) && (<p className="error">{state.error.firstName}</p>)
                    // Operador ternario
                    //(state.error.firstName !== null) ? <p className="error">{state.error.firstName}</p> : ''
                }
            </div>
            <div className="row">
                <label htmlFor="LastName">Last Name: </label>
                <input type="text" id="LastName" name="lastName" value={state.lastName} onChange={onChange}/>
                {
                    (state.error.lastName !== null) && (<p className="error">{state.error.lastName}</p>)
                }
            </div>
            <div className="row">
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="email" value={state.email} onChange={onChange}/>
                {
                    (state.error.email !== null) && (<p className="error">{state.error.email}</p>)
                }
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default FormValidation;
