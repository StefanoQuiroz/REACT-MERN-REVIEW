import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
    //width & height in pixels always
    width: ${props => props.newWidth+"px"};
    height: ${props => props.newHeight+"px"};
    background-color: ${ color => color.newColor};
`;

const Box = () => {
    //Clean the inputs with useRef
    const colorInput = useRef(null);
    const heightInput = useRef(null);
    const widthInput = useRef(null);
    //manage the states
    const [state, setState] = useState({
        boxes : [],
        color: "green",
        height: 300,
        width: 300
    })

    //Se implementa cada onChangeColor, onChangeHeight y onChangeWidth para cada botón Add

    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name] : value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //si no aplico el setState cambiandole otro key y qye reciba el state.color, este se cambia automaticamente con el onChange sin necesidad del onSubmit (hacer click en el botón)
        setState({
            boxes: [...state.boxes, {_color:state.color, _height:state.height, _width:state.width}],
            color: "green",
            height: 300,
            width: 300
            
        })
        colorInput.current.value="";
        heightInput.current.value="";
        widthInput.current.value="";
        //console.log(state.boxes);    
    }

    const divs = state.boxes.map((item, index) => (
        <StyledDiv 
            key={index}
            newColor={item._color}
            newHeight={item._height}
            newWidth={item._width}
        />
    ));

    return (
        /* retiramos el value={state.atributo}, porque sino aparece los valores por default en el objeto con los inicializadores */
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <label htmlFor="color">Color</label>
                    <input type="text" ref={colorInput} id="color" name="color" /* value={state.color} */ onChange={onChange} placeholder="Enter the color of the box"/>
                </div>
                <div className="row">
                    <label htmlFor="height">Height</label>
                    <input type="number" id="height" ref={heightInput} name="height" /* value={state.height} */ onChange={onChange} placeholder="Enter the height of the box"/>
                </div>
                <div className="row">
                    <label htmlFor="width">Width</label>
                    <input type="number" id="width" ref={widthInput} name="width" /* value={state.width} */ onChange={onChange} placeholder="Enter the width of the box"/>
                </div>
               <div className="button">
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
