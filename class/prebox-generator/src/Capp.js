import React from 'react';
import MyComponnets from './parametrosAdicionales/MyComponnets';
const Capp = () => {
    return (
        <div className="App">
            <MyComponnets movies={["superman", "batman", "bob"]}/>
        </div>
    );
}

export default Capp;
