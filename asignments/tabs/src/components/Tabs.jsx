import React, { useState } from 'react';
import styled from 'styled-components';

const TabsDiv = styled.div`
    //outline: 1px solid green;
    width: 42%;
    margin-left: 10%;
    margin-top: 1%;
    display: flex;
    justify-content: space-around;
`; 

const StyledButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    font-family: 'Dancing Script';
    width: 30%;
    font-size: 2rem;
    padding: 0.5rem 0rem;
    background-color: ${props => (props.backColor) ? "#000" : "#fff"};
    color: ${props => (props.color) ? "#fff" : "#000"};
    border-color: ${props => (props.border) ? "#000" : "#efefef"};
    border-width: 3px; 
    border-style: solid;
    box-sizing: border-box;
`;


const Tabs = ({tabs}) => {
    
    const [state, setState] = useState({
        tab: 1
    })

    const onClick = (valueTab) => {
        //cambie el value con un setState
        setState({
            tab: valueTab
        })
    }

    const buttonTabs = tabs.map((item, index) => (
        <StyledButton 
            key={index} 
            onClick={event => onClick(item)}
            backColor={state.tab === item}
            color={state.tab === item}
            border={state.tab === item}
        >Tabs {item}</StyledButton>
    )) 

    return (
        <div className="container">
            <TabsDiv>
                {buttonTabs}
            </TabsDiv>
            <div className="content">
                <div>Tab {state.tab} content is showing here</div>
            </div>            
        </div>
    );
}

export default Tabs;

/* 
    Estilos:
    1. Cuando se seleccione con onClick cambie de background-color: blanco a negro y el color: de negro a blanco.
    2. El resultado aparezca en color: negro y background-color: blanco.
*/