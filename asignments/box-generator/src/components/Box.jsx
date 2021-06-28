import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
    width: ${w => w.newWidth+"px" || "200px"};
    height: ${h => h.newHeight+"px" || "200px"};
    background-color: ${ color => color.newColor || "red"};
`;

const Box = () => {
    //manage the states
    const [state, setState] = useState({
        boxes : [],
        color: "",
        height: 0,
        width: 0
    })

    //Se implementa cada onChangeColor, onChangeHeight y onChangeWidth para cada botón Add
    const onChangeColor = (event) => {
        const {value} = event.target;
        setState({
            ...state,
            color: value
        })
    }

    const onChangeHeight = (event) => {
        const {value} = event.target;
        setState({
            ...state,
            height: value
        })
    }
    const onChangeWidth = (event) => {
        const {value} = event.target;
        setState({
            ...state,
            width: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //si no aplico el setState cambiandole otro key y qye reciba el state.color, este se cambia automaticamente con el onChange sin necesidad del onSubmit (hacer click en el botón)
        setState({
            boxes: [...state.boxes, {Color:state.color, Height:state.height, Width:state.width}],
            color: "",
            height: 0,
            width: 0
        })
        //console.log(state.boxes);    
        //console.log(state.boxes);
        //[pink, green, blue, black]    
    }

    const divs = state.boxes.map((item, index) => (
        <StyledDiv 
            key={index}
            newColor={item.Color}
            newHeight={item.Height}
            newWidth={item.Width}
        />
    ));

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" value={state.color} onChange={onChangeColor} placeholder="Enter the color of the box"/>
                    <button type="submit">Add</button>
                </div>
                <div className="row">
                    <label htmlFor="height">Height</label>
                    <input type="number" id="height" name="height" value={state.height} onChange={onChangeHeight} placeholder="Enter the height of the box"/>
                    <button type="submit">Add</button>
                </div>
                <div className="row">
                    <label htmlFor="width">Width</label>
                    <input type="number" id="width" name="width" value={state.width} onChange={onChangeWidth} placeholder="Enter the width of the box"/>
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
