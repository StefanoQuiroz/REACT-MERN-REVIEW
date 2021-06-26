import React, { useReducer } from 'react';

const initialState = {
    name: '',
    email: ''
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type] : action.payload
    }
}

const FormUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (event) => {
        //const name= event.target.name;
        //const value = event.target.value;
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

    return (
        <div>
            <form onSubmit={onSubmit}>
                {JSON.stringify(state)} {/* siempre en mayúsculas JSON.stringify(object) */}
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" value={state.name} onChange={onChange}/>
                </div>         
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" value={state.email} onChange={onChange}/>
                </div>
                <input type="submit"  value="send"/>         
            </form>
            <div>
                <h2>Results</h2>
                <p>Name: {state.name}</p>
                <p>Email: {state.email}</p>
            </div>
        </div>
    );
}

export default FormUseReducer;
