import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 200px;
    height: 200px;
    background-color: ${ color => color.newColor || "red"};
`;

const Box = () => {
    //manage the states
    const [state, setState] = useState({
        color: ""
    })

    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //si no aplico el setState cambiandole otro key y qye reciba el state.color, este se cambia automaticamente con el onChange sin necesidad del onSubmit (hacer click en el botón)
        setState({
            colors: state.color
        })    
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" value={state.color} onChange={onChange}/>
                    <button type="submit">Add</button>
                </div>
            </form>
            <div className="results">
                <StyledDiv newColor={state.colors}/>
            </div>            
        </div>
    );
}

export default Box;
