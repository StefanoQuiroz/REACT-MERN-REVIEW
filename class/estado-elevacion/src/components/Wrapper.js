import React, { useState } from 'react';
import Input from './Input';
import FilteredList from './FilteredList';

const Wrapper = (props) => {
    const [input, setInput] = useState("");
    const {wrapperItems} = props;
    return (
        <div>
            <h2>My Filtered List</h2>
            <Input palabraInicial={input} setPalabraInicial={setInput}/>
            <FilteredList inputWord={input} wordList={wrapperItems.filter(item => item.indexOf(input) > -1)}/>                
        </div>
    );
}

export default Wrapper;
