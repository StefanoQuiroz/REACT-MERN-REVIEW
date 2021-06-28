import React from 'react';

const MyComponnets = ({movies}) => {

    const onClick = (value) => {
        alert(value)
    } 

    const list = movies.map((items, index) => (
        <button key={index} onClick={e=>onClick(items)}>{items}</button>
    ))
    
    return (
        <div>
            {list}
        </div>
    );
}

export default MyComponnets;
