import React, { useState } from 'react';

const SelectCheckBox = () => {
    const fruits = ['banana', 'pineapple', 'peach', 'apple'];
    
    const [stateSelect, setStateSelect] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);

    //alert(stateSelect);

    const options = fruits.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ))
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(`The ${stateSelect} is ${isTasty ? "" : "not" } tasty`)
    } 

    return (
        <form onSubmit={onSubmit}>
            <br />
            <select value={stateSelect} onChange={(event) => setStateSelect(event.target.value)}>
                {options}
            </select>
            <br />
            <br />
            <label htmlFor="checkBox">Is Tasty? </label>
            <input type="checkbox" id="checkBox" checked={isTasty} onChange={(event) => setIsTasty(event.target.checked)}/>
            <br />
            <br />
            <button>Take a bite!</button>            
        </form>
    );
}

export default SelectCheckBox;
