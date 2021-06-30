import React, { useContext } from 'react';
import { MyContext } from './Wrapper';

const Form = () => {
    const {state, setState} = useContext(MyContext)
    
    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name] : value
        })
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" name="name" value={state.name} onChange={onChange}/>
            </div>            
        </form>
    );
}

export default Form;
