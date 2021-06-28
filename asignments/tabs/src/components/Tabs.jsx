import React, { useState } from 'react';

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
        <button key={index} onClick={event => onClick(item)}>Tabs {item}</button>
    )) 

    return (
        <div className="container">
            <div className="tabs">
                {buttonTabs}
            </div>
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