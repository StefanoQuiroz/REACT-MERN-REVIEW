import React from 'react';

const List = () => {
    const items = ['Learn React', 'Climb Mt. Everest', 'Run a Marathon', 'Feed the dogs'];
    const list = items.map((item, index)=>(<li key={index}>{item}</li>));
    return (
        <div className="list">
            <p>Things I need to do:</p>
            <ul>{list}</ul>         
        </div>
    );
}

export default List;
