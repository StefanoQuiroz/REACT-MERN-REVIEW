import React from 'react';

const Groceries = () => {
    const groceryList = ["pearls onions", "thyme","cremini mushrooms", "butter"];
    const list = groceryList.map((item, index) => (<li key={index}>{item}</li>));
    return (
        <div>
            <ul>
                <h2>List</h2>
                {list}
            </ul>            
        </div>
    );
}

export default Groceries;
