import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
    width: 200px;
    height: 200px;
    background-color: ${ color => color.newColor || "red"};
`;

const Box = () => {
    //manage the states
    const [state, setState] = useState({
        boxes : [],
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
            boxes: [...state.boxes, {colors:state.color}],
            color: ""
        })
        //console.log(state.boxes);    
        //console.log(state.boxes);
        //[pink, green, blue, black]    
    }

    const divs = state.boxes.map((item, index) => (
        <StyledDiv 
            newColor={item.colors}
            key={index}
        />
    ));

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" value={state.color} onChange={onChange} placeholder="Enter color, width, and height of the box"/>
                    <button type="submit">Add</button>
                </div>
            </form>
            <div className="results">
                {divs}
            </div>            
        </div>
    );
}

export default Box;
